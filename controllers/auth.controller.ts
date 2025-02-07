import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not set");
}

const users: { username: string, password: string }[] = []

interface AuthSuccessResponse {
  success: true;
  token: string;
}

interface AuthFailureResponse {
  success: false;
  message: string;
}

type AuthResponse = AuthSuccessResponse | AuthFailureResponse;

export class AuthController {
  static async register(username: string, password: string): Promise<AuthResponse> {
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
      return { success: false, message: "Username already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ username, password: hashedPassword });

    const token = jwt.sign({ username: username }, JWT_SECRET!, { expiresIn: "1h" });

    return { success: true, token };
  }

  static async login(username: string, password: string): Promise<AuthResponse> {
    const user = users.find(user => user.username === username);

    if (!user) {
      return { success: false, message: "Invalid username or password" };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return { success: false, message: "Invalid username or password" };
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET!, { expiresIn: "1h" });

    return { success: true, token };
  }
}
