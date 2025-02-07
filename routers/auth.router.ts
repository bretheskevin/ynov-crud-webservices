import { Router, Request, Response } from "express";
import { AuthController } from "../controllers/auth.controller";
import { sendJsonResponse } from "../helpers/send-json-response";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send("Body format : username, password");
    return;
  }

  const response =  await AuthController.register(username, password);

  if (!response.success) {
    res.status(400).send(response.message);
    return;
  }

  sendJsonResponse(res, { message: "User registered successfully" });
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send("Body format : username, password");
    return;
  }

  const response = await AuthController.login(username, password);

  if (!response.success) {
    res.status(401).send(response.message);
    return;
  }

  sendJsonResponse(res, { message: "Login successful", token: response.token });
});

export default router;
