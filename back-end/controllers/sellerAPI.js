// login > check database if it exist 
// See both passwords (check)
// If password is correct > JSON format API with all the dashboard info 
// 📦 TODO HTML : Listen to a Post req => creating a raffle


const { prisma } = require('../generated/prisma-client')


module.exports = (app) => {

    app.post('/api/seller/login', async(req, res) => { 

        const email_account = req.body.email

        console.log('We got it')
        console.log(req.body.email);

        const checkSeller = await prisma.$exists.seller({ email: email_account });
        console.log(checkSeller);
    

        if (!checkSeller === false) {

                
                // Here we need to check if the password match 
                const getUser = await prisma.sellers({ 

                    where: {
                        email: email_account,
                      }
                });

                console.log(getUser);

                
                if (getUser[0].password === req.body.password) { 
                    
                    // later we will redirect them to the dashboard page 
                    // send JSON file with all the raffles that they have 
                    console.log('Welcome dude')
                    res.json({ 
                        "status": 200,
                        "email": getUser.email, 
                    }); 
                    
                } else { 
                    res.status(404)
                }
                
        } else { 
           console.log('user not found!')
           res.status(404)

        }
    }); 

    app.post('/api/seller/regiser', async (req, res) => { 
           
            // convinience variable 
            const rBody = req.body;
    
            // We add the raffle into our database 
            const newSeller = await prisma.createSeller({ 
                name: rBody.name,
                email: rBody.email, 
                password: rBody.password, 
            });
    
            console.log(`➕ Added a new raffle into DB  ${newSeller} `)
            
            //
            res.json(newSeller); 
    
    });

    

}

 