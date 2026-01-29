import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const users = [];

export async function register(username, password) {
  const existingUser = users.find((u) => u.username === username);

  if (existingUser) {
    throw new Error("Usuário existente já");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: crypto.randomUUID(),
    username,
    password: hashedPassword,
  };

  users.push(newUser);

  return {
    id: newUser.id,
    username: newUser.username,
  };
}

export async function login(username, password) {
  const user = users.find((u) => u.username === username);

  if (!user) {
    throw new Error("Usuário inválido!");
  }

  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    throw new Error("Senha inválida!");
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" },
  );

  return token;
}
