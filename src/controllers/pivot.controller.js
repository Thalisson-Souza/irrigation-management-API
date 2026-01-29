import * as pivotService from "../services/pivot.service.js";

export async function getUsersPivots(request, response) {
  const userId = request.userId;
  const pivots = pivotService.getUsersPivots(userId);

  response.status(200).json(pivots);
}

export async function getPivotById(request, response) {
  const userId = request.userId;
  const pivotId = request.params.id;

  const pivot = pivotService.getPivotById(userId, pivotId);

  if (!pivot) return response.status(404).json({ message: "Pivo não encontrado!" });

  response.status(200).json({
    message: "Pivo foi buscado com sucesso!",
    pivot,
  });
}

export async function createPivot(request, response) {
  const userId = request.userId;
  const { description, flowRate, minApplicationDepth } = request.body;

  if (!description || !flowRate || !minApplicationDepth)
    return response.status(400).json({ message: "Campos obrigatórios faltantes" });

  const registerPivot = pivotService.createPivot(userId, {
    description,
    flowRate,
    minApplicationDepth,
  });

  response.status(201).json({
    message: "Pivo criado com sucesso!",
    registerPivot,
  });
}

export async function updatePivot(request, response) {
  const dataUpdatePivot = request.body;
  const userId = request.userId;
  const pivotId = request.params.id;

  const updatePivot = pivotService.updatePivot(userId, pivotId, dataUpdatePivot);

  response.status(200).json({
    message: "Pivo foi atualizado com sucesso!",
    updatePivot,
  });
}

export async function deletePivot(request, response) {
  const userId = request.userId;
  const pivotId = request.params.id;

  const removePivot = pivotService.deletePivot(userId, pivotId);

  response.status(200).json({
    message: "Pivo removido com sucesso!",
    removePivot,
  });
}
