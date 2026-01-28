import { randomUUID } from "crypto";

const pivots = [];

export function getUsersPivots(userId) {
  const userPivots = pivots.filter((p) => p.userId === userId);

  return userPivots;
}

export function getPivotById(userId, pivotId) {
  const pivot = pivots.find((p) => p.id === pivotId);

  if (!pivot || pivot.userId !== userId) {
    throw new Error("pivo nao encontrado");
  }

  return pivot;
}

export function createPivo(userId, data) {
  const pivot = {
    id: randomUUID(),
    description: data.description,
    flowRate: data.flowRate,
    minApplicationDepth: data.minApplicationDepth,
    userId,
  };

  pivots.push(pivot);

  return pivot;
}

export function updatePivo(userId, pivoId, data) {
  const pivot = getPivotById(userId, pivoId);

  Object.assign(pivot, data);

  return pivot;
}

export function removePivo(userId, pivotId) {
  const pivot = getPivotById(userId, pivotId);
  const index = pivots.indexOf(pivot);

  pivots.splice(index, 1);
}
