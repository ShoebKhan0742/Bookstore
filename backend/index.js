import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const URI = process.env.MongoDBURI;
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
if (!URI) {
    console.error('MongoDB URI is not defined in the environment variables.');
    process.exit(1);
}

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit if MongoDB connection fails
    });

// Event listener for mongoose connection
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});




