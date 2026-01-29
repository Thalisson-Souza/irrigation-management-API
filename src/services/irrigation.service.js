import { randomUUID } from "node:crypto";
import * as pivotService from "./pivot.service.js";

const irrigations = [];

export function getUserIrrigations(userId) {
  const listIrrigations = irrigations.filter((p) => p.userId === userId);

  return listIrrigations;
}

export function getUserIrrigationById(userId, irrigationId) {
  const irrigation = irrigations.find((p) => p.id === irrigationId);

  //ver isso
  if (!irrigation || irrigation.userId !== userId) {
    throw new Error("registro irrigaçao não encontrado");
  }

  return irrigation;
}

export function createIrrigation(userId, irrigationData) {
  pivotService.getPivotById(userId, irrigationData.pivotId);

  const newCreateIrrigation = {
    id: randomUUID(),
    pivotId: irrigationData.pivotId,
    applicationAmount: irrigationData.applicationAmount,
    irrigationDate: irrigationData.irrigationDate,
    userId,
  };

  irrigations.push(newCreateIrrigation);

  return newCreateIrrigation;
}

export function deleteUserIrrigation(userId, irrigationId) {
  const irrigation = getUserIrrigationById(userId, irrigationId);
  const index = irrigations.indexOf(irrigation);

  irrigations.splice(index, 1);
}
