import { Router } from "express";
import * as pivotController from "../controllers/pivot.controller.js";

const routes = Router();

routes.get("/", pivotController.getUsersPivots);
routes.get("/:id", pivotController.getById);
routes.post("/", pivotController.createPivo);
routes.put("/:id", pivotController.updatePivo);
routes.delete("/:id", pivotController.removePivo);

export default routes;
