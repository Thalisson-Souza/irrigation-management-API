import express from "express";
import dotenv from "dotenv";
import pivotRoutes from "./routes/pivot.route.js";
import irrigationRoutes from "./routes/irrigation.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/pivots", pivotRoutes);
app.use("/irrigations", irrigationRoutes);
app.use("/auth", authRoutes);

app.listen(3030, () => {
  console.log("Server is running localhost:3030");
});
