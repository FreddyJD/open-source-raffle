// ✅This is an automated task in a server
// ✅ Each day we want to read all the raffles in our database
// ✅ if statement (days is === 0)
// TODO:  Pick the winner
// ✅ disable the raffle
// 😜 min tickets < tickets sold // Pick winner
// ✅ Write in all (-1) on daysLeft

const { prisma } = require("../generated/prisma-client");

var CronJob = require("cron").CronJob;

new CronJob(
  "0 0 0 * * *",
  async () => {
    const allRaffles = await prisma.raffles();

    const totalActiveRaffles = allRaffles.length;

    for (let i = 0; i < totalActiveRaffles; i++) {

      const raffleID = allRaffles[i].id;

      const days = allRaffles[i].daysLeft - 1;

      if (days === 0) {
        await prima.updateRaffle({
          where: {
            id: raffleID
          },
          data: {
            active: false,
            daysLeft: 0,
            winner: "Brandon 🙋‍"
          }
        });
      } else {
        await prima.updateRaffle({
          where: {
            id: raffleID,
            active: true
          },
          data: {
            daysLeft: days
          }
        });
      }
    }
  },
  null,
  true,
  "America/Los_Angeles"
);
