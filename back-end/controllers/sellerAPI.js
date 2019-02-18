const { prisma } = require('../generated/prisma-client')


module.exports = (app) => {

    // The front-end will send a req to this /api route 
    // with their email address 
    app.get('/api/seller/:email', async (req, res) => { 
        const email = req.params.email

        // Check if they exist in our database
        const checkSeller = await prisma.$exists.seller({ email: email });
        
        if (checkSeller) { 
            const getUser = await prisma.sellers({ 
                where: {
                    email: email,
                  }
            });
            res.json(getUser[0]); 

        // if they exist we create a user in our Database
        } else { 
            await prisma.createSeller({ email: email });
            const getUser = await prisma.sellers({ where: { email: email, }});
            res.json(getUser[0]); 
        }
    });

    app.get('/api/seller/raffles/:email', async (req, res) => { 
        const email = req.params.email
        const sellers_raffles = await prisma.sellers({ where: {email: email,}}).Raffles();
        res.json(sellers_raffles[0].Raffles);
    })

}

 