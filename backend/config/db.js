import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};
