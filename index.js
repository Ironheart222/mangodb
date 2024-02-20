// index.js

import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import routes from './routes/index.js';
import db from "./db.js";


const app = express();

db.createPool().catch(err => {
    console.error('Error creating MongoDB connection pool:', err);
    process.exit(1); // Exit the process if pool creation fails
});




// Middleware
app.use(json());

// Routes
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
