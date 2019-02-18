const { prisma } = require('../generated/prisma-client')


module.exports = (app) => {
    app.get('/api/raffles/all', async (req, res) => { 
        const allRaffles = await prisma.raffles();
        return res.json(allRaffles);

    });
    app.get('/api/raffles/search/:id', async(req, res) => {

        const getRafflebyID = await prisma.raffle({
            id: req.params.id
        })

        res.json(getRafflebyID); 

    })

    app.post('/api/raffle/create', async (req, res) => { 

        console.log(req.body.name);
        console.log(req.body.email);
        console.log(req.body.desc);

        // convinience variable 
        const rBody = req.body;
        const email_account = req.body.email

        const getUser = await prisma.sellers({ 
            where: {
                email: email_account,
              }
        }); 
        const raffleHostID = getUser[0].id;
        console.log(raffleHostID);

        // We add the raffle into our database 
        const newRaffle = await prisma.createRaffle({ 
            name: rBody.name,
            picture: rBody.picture, 
            desc: rBody.desc, 
            daysLeft: rBody.daysLeft,
            numTickets: rBody.numTickets,
            minTickets: rBody.minTickets,
            Seller: {
                connect: {
                  id: raffleHostID,
                }
              },
        });

        console.log(`➕ Added a new raffle into DB  ${newRaffle} `)
        
        // this is the response that we give back 
        res.json(newRaffle)

    })
}

 