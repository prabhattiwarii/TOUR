import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

import { db } from './database/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Database successfully connected');
}).catch(error => {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the process if database connection fails
});

// For testing
app.get('/', (req, res) => {
    res.send('API is working');
});

// Error handling for CORS
app.use((err, req, res, next) => {
    if (err.name === 'CORSError') {
        res.status(403).json({ error: 'Origin not allowed' });
    } else {
        next(err);
    }
});

// Error handling for other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
