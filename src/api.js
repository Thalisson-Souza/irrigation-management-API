import express from "express";
import pivotRoutes from "./routes/pivot.route.js";
import irrigationRoutes from "./routes/irrigation.route.js";

const app = express();

app.use(express.json());
app.use("/pivots", pivotRoutes);
app.use("/irrigations", irrigationRoutes);

app.listen(3030, () => {
  console.log("Server is running localhost:3030");
});
