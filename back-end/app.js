const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Daily update
require('./models/dbCron');

// API routes 
require('./controllers/raffleAPI')(app);
// User API route
// Seller API route


app.listen(PORT, function() {
    console.log("🔥 App listening on PORT http://localhost:" + PORT);
});

