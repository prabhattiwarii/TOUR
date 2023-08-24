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

const corsOptions = {
  origin: true,
  credentials: true
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute); // Prefix the route with a forward slash ("/")
app.use('/api/v1/users', userRoute); // Prefix the route with a forward slash ("/")
app.use('/api/v1/auth', authRoute); // Prefix the route with a forward slash ("/")
app.use('/api/v1/review' , reviewRoute)
app.use('/api/v1/booking' , bookingRoute)

// Database connection
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('Database successfully connected');
}).catch(error => {
  console.log('Database could not be connected: ' + error);
});

// For testing
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start the server
app.listen(port, () => {
  console.log('Server listening on port', port);
});

