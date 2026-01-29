import * as authService from "../services/auth.service.js";

export async function register(request, response) {
  const { username, password } = request.body;

  if (!username || !password) {
    return response.status(400).json({ message: "Username e password são obrigatórios!" });
  }

  const registeredUser = await authService.register(username, password);

  response.status(201).json({
    message: "Usuário registrado com sucesso!",
    registeredUser,
  });
}

export async function login(request, response) {
  const { username, password } = request.body;

  const generatedToken = await authService.login(username, password);

  response.status(200).json({
    message: "Login efetuado com sucesso!",
    generatedToken,
  });
}
