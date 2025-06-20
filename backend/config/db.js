import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://sankalpgupta2604:o7pDqpqrXDCZETsB@cluster0.ow4oyn5.mongodb.net/HomeFeast').then(()=>console.log("DB Connected"));
}