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
        await prisma.updateRaffle({
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
        await prisma.updateRaffle({
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
