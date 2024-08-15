import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;












app.listen(PORT, () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Connected to MongoDB");
  });
});
