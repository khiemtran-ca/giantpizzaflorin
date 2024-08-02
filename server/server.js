// Require the dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Create an express server app
const app = express();

// Require database
require("./database/db_connection");

// Routes
const routes = require('./routes/routes');

// PORT
const PORT = process.env.API_PORT || 3000;

// Logger
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request for ${req.url}`);
    // For tracking user requests  Do: append to file?
    next();
})

// Set up middleware to handle incoming body requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);

// Start the server listening for requests
app.listen(PORT, () => {
    console.log(`Now Serving on Port http://localhost:${PORT}`);
});