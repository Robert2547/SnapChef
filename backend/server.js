import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./db/connectToMongoDB.js";
import { protectRoute } from "./middleware/protectRoute.js";
import cookieParser from "cookie-parser";
import userProfileRoutes from "./routes/userProfileRoutes.js";
import recipesRoutes from "./routes/recipesRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/auth", authRoutes); // Handle signup, login, logout
app.use("/api/profile", protectRoute, userProfileRoutes); // Handle user profile requests
app.use("/api/recipes", protectRoute, recipesRoutes); // Handle recipe requests

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});
