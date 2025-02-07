import express, { Request, Response } from "express";
import dotenv from "dotenv";
import patientsRouter from "./routers/patients.router";
import authRouter from "./routers/auth.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("GET request received");
});

app.use("/v1/patients", patientsRouter);
app.use("/v1/auth", authRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
