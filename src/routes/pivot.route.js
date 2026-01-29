import { Router } from "express";
import * as pivotController from "../controllers/pivot.controller.js";
import { authToken } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.get("/", authToken, pivotController.getUsersPivots);
routes.get("/:id", authToken, pivotController.getPivotById);
routes.post("/", authToken, pivotController.createPivot);
routes.put("/:id", authToken, pivotController.updatePivot);
routes.delete("/:id", authToken, pivotController.deletePivot);

export default routes;
