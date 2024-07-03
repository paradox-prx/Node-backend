import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import express from "express";

const connectDB= async() => {
    try {
        const connection= await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log("\n WE FUCKING LIVE BABY \n connection details : ",connection);
    } catch (error) {
        console.error("Error connecting to Database: ",error);
        process.exit(1);
    }
}

export default connectDB