import { Router } from "express";
import * as irrigationController from "../controllers/irrigation.controller.js";

const routes = Router();

routes.get("/", irrigationController.getUserIrrigations);
routes.get("/:id", irrigationController.getUserIrrigationById);
routes.post("/", irrigationController.createIrrigation);
routes.delete("/:id", irrigationController.deleteUserIrrigation);

export default routes;
