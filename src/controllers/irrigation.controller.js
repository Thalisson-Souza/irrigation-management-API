import * as irrigationService from "../services/irrigation.service.js";

const USER_ID = "user-123";

export async function getUserIrrigations(request, response) {
  const irrigations = irrigationService.getUserIrrigations(USER_ID);

  response.status(200).json(irrigations);
}

export async function getUserIrrigationById(request, response) {
  //tirar
  const userId = USER_ID;
  const irrigationId = request.params.id;

  const irrigation = irrigationService.getUserIrrigationById(userId, irrigationId);
  if (!irrigation) return response.status(404).json({ message: "Irrigação não encontrada!" });

  response.status(200).json({ message: "Irrigação encontrada com sucesso!", irrigation });
}

export async function createIrrigation(request, response) {
  const { pivotId, applicationAmount, irrigationDate } = request.body;

  if (!pivotId || !applicationAmount || !irrigationDate)
    return response.status(400).json({ message: "Não foi preenchido campos obrigatórios" });

  const registerIrrigation = irrigationService.createIrrigation(USER_ID, {
    pivotId,
    applicationAmount,
    irrigationDate,
  });

  response.status(201).json({ message: "Registro de Irrigação criado com sucesso!", registerIrrigation });
}

export async function deleteUserIrrigation(request, response) {
  const userId = USER_ID;
  const irrigationId = request.params.id;

  const removeIrrigation = irrigationService.deleteUserIrrigation(userId, irrigationId);

  response.status(200).json({ message: "Irrigação removida com sucesso!", removeIrrigation });
}
