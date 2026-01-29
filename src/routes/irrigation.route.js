import { Router } from "express";
import * as irrigationController from "../controllers/irrigation.controller.js";
import { authToken } from "../middlewares/auth.middleware.js";

const routes = Router();

routes.get("/", authToken, irrigationController.getUserIrrigations);
routes.get("/:id", authToken, irrigationController.getUserIrrigationById);
routes.post("/", authToken, irrigationController.createIrrigation);
routes.delete("/:id", authToken, irrigationController.deleteUserIrrigation);

export default routes;
