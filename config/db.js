import mongoose from "mongoose";
const MONGO_URI = 'mongodb+srv://abberhjay31:M8wSJiOYoJIYfnAy@cluster0.k4mkxru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
  };


