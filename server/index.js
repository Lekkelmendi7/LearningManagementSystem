import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
import userRoutes from '../server/routes/user.js'; // Ensure this path is correct

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server is working");
});

// Using routes
app.use("/api", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    connectDb();
});
