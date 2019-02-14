const express = require("express");
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Daily update
require('./models/dbCron');

// API routes 
require('./controllers/raffleAPI')(app);
require('./controllers/sellerAPI')(app);



app.listen(PORT, function() {
    console.log("🔥 App listening on PORT http://localhost:" + PORT);
});

