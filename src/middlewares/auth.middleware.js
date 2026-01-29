import jwt from "jsonwebtoken";

export function authToken(request, response, next) {
  const authHeader = request.headers["authorization"];

  if (!authHeader) {
    return response.status(401).json({ message: "Token não informado" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) return response.status(401).json({ message: "token malinformado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.userId = decoded.userId;
    next();
  } catch (error) {
    return response.status(401).json({ message: "token inválido!" });
  }
}
