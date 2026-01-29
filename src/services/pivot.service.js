import { randomUUID } from "crypto";

const pivots = [];

export function getUsersPivots(userId) {
  const userPivots = pivots.filter((p) => p.userId === userId);

  return userPivots;
}

export function findPivotById(pivoId) {
  return pivots.find((p) => p.id === pivoId);
}

export function getPivotById(userId, pivotId) {
  const pivot = findPivotById(pivotId);

  if (!pivot) {
    throw new Error("Pivo não encontrado (findPivotById");
  }

  if (pivot.userId !== userId) {
    throw new Error("Pivo não pertence ao usuário (findPivotById)");
  }

  return pivot;
}

export function createPivot(userId, pivotData) {
  const newPivot = {
    id: randomUUID(),
    description: pivotData.description,
    flowRate: pivotData.flowRate,
    minApplicationDepth: pivotData.minApplicationDepth,
    userId,
  };

  pivots.push(newPivot);

  return newPivot;
}

export function updatePivot(userId, pivoId, pivotData) {
  const pivot = getPivotById(userId, pivoId);

  Object.assign(pivot, pivotData);

  return pivot;
}

export function deletePivot(userId, pivotId) {
  const pivot = getPivotById(userId, pivotId);
  const index = pivots.indexOf(pivot);

  pivots.splice(index, 1);
}
