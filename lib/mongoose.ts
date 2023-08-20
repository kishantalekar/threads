import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGOODB_URL) return console.log("mongoodb url not found");
  if (isConnected) return console.log("Already connected to mongodb");

  try {
    await mongoose.connect(process.env.MONGOODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
