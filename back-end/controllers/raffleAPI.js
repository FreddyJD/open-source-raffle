const { prisma } = require('../generated/prisma-client')


module.exports = (app) => {


    app.get('/api/raffles/all', async (req, res) => { 
        const allRaffles = await prisma.raffles();
        return res.json(allRaffles);

    })

    app.get('/api/raffles/search/:id', async(req, res) => {

        const getRafflebyID = await prisma.raffle({
            id: req.params.id
        })

        res.json(getRafflebyID); 

    })

    app.post('/api/raffle/create', async (req, res) => { 

        // convinience variable 
        const rBody = req.body;

        // We add the raffle into our database 
        const newRaffle = await prisma.createRaffle({ 
            name: rBody.name,
            picture: rBody.picture, 
            desc: rBody.desc, 
            daysLeft: rBody.days,
            numTickets: rBody.numTickets,
            minTickets: rBody.minTickets,
        });

        console.log(`➕ Added a new raffle into DB  ${newRaffle} `)
        
        // this is the response that we give back 
        res.json(newRaffle)

    })
}

 