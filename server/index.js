import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
import userRoutes from '../server/routes/user.js';
import courseRoutes from '../server/routes/courses.js'; 
import adminRoutes from '../server/routes/admin.js'; // Ensure this path is correct
import Stripe from 'stripe';
import cors from 'cors';

dotenv.config();


export const instance = new Stripe({
    key_id: process.env.Stripe_PublishableKey,
    key_secret: process.env.Stripe_Secret,
});

const app = express();

//using middleware
app.use(express.json());

app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server is working");
});

app.use("/uploads", express.static("uploads"));

// Using routes
app.use("/api", userRoutes);

app.use("/api", adminRoutes);

app.use("/api", courseRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    connectDb();
});
