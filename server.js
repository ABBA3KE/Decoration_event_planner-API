// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
import express from 'express'
import mongoose from 'mongoose';
import { connectDb } from './config/db.js'



// Routes
import userRoutes from "./routes/userRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

// dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDb();

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);

// PORT
app.get("/", (req, res) => {
  res.send(" Event Decoration API is running...");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)}
);
