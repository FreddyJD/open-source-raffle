// login > check database if it exist 
// See both passwords (check)
// If password is correct > JSON format API with all the dashboard info 
// 📦 TODO HTML : Listen to a Post req => creating a raffle


const { prisma } = require('../generated/prisma-client')


module.exports = (app) => {

    app.post('/api/seller/login', async (req, res) => { 

        const checkSeller = prisma.$exists.seller({ email: req.body.email });

    

        if (!checkSeller === null) {

            // Here we need to check if the password match 
            const getUser = await prisma.seller({ email: req.body.email });

            if (getUser.password === req.body.password) { 

                // later we will redirect them to the dashboard page 
                // send JSON file with all the raffles that they have 
                console.log('Welcome dude')
                res.json(getUser); 

            } else { 
                console.log('Wrong password!')
            }


        } else { 
           console.log('user not found!')
        }
    }); 

    app.post('/api/seller/regiser', (req, res) => { 
           
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

 