import { Router } from "express";
import * as pivotController from "../controllers/pivot.controller.js";

const routes = Router();

routes.get("/", pivotController.getUsersPivots);
routes.get("/:id", pivotController.getPivotById);
routes.post("/", pivotController.createPivot);
routes.put("/:id", pivotController.updatePivot);
routes.delete("/:id", pivotController.deletePivot);

export default routes;
