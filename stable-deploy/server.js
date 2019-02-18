const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

require('./server/models/dbCron');

app.prepare().then(() => {
  const server = express();
  
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  
  require('./server/controllers/raffleAPI')(server);
  require('./server/controllers/sellerAPI')(server);
  
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.get('/raffle/:id', async (req, res) => {
    return app.render(req, res, '/raffle', { id: req.params.id })
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})