import * as pivotService from "../services/pivot.service.js";

// até ter JWT
const USER_ID = "user-123";

export async function getUsersPivots(request, response) {
  const pivots = pivotService.getUsersPivots(USER_ID);

  let message = pivots.length > 0 ? "pivos foram retornados" : "o user nao tem pivos cadastrados";

  response.status(200).json({
    message,
    pivots,
  });
}

export async function getById(request, response) {
  const userId = USER_ID;
  const pivotId = request.params.id;

  const pivot = pivotService.getPivotById(userId, pivotId);

  if (!pivot) return response.status(404).json({ message: "pivo nao encontrado" });

  response.status(200).json({
    message: "Pivot foi buscado com sucesso",
    pivot,
  });
}

export async function createPivo(request, response) {
  const { description, flowRate, minApplicationDepth } = request.body;

  if (!description || !flowRate || !minApplicationDepth)
    return response.status(400).json({ message: "nao foi preenchido campos obrigatorios" });

  const pivot = pivotService.createPivo(USER_ID, {
    description,
    flowRate,
    minApplicationDepth,
  });

  response.status(201).json({
    message: "Pivo criado com sucesso",
    pivot,
  });
}

export async function updatePivo(request, response) {
  const dataUpdatePivot = request.body;
  const userId = USER_ID;
  const pivotId = request.params.id;

  const updatePivo = pivotService.updatePivo(userId, pivotId, dataUpdatePivot);

  response.status(200).json({
    message: "Pivo atualizado com sucesso",
    updatePivo,
  });
}

export async function removePivo(request, response) {
  const userId = USER_ID;
  const pivotId = request.params.id;

  const removePivo = pivotService.removePivo(userId, pivotId);

  response.status(202).json({
    message: "Pivo removido com sucesso",
    removePivo,
  });
}
