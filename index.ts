import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { PatientsController } from "./controllers/patients.controller";
import { sendJsonResponse } from "./helpers/send-json-response";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("GET request received");
});

app.get("/patients", (req: Request, res: Response) => {
  const response = PatientsController.getPatients();
  sendJsonResponse(res, response.toJSON());
});

app.get("/patients/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (!parseInt(id)) {
    res.status(400).send("400 Bad Request");
    return;
  }

  const response = PatientsController.getPatient(parseInt(id));

  if (!response) {
    res.status(404).send("404 Not Found");
    return;
  }

  sendJsonResponse(res, response.toJSON());
});

app.post("/patients", (req: Request, res: Response) => {
  const { fullname } = req.body;

  if (!fullname) {
    res.status(400).send("400 Bad Request");
    return;
  }

  const response = PatientsController.createPatient(fullname);

  sendJsonResponse(res, response.toJSON());
});

app.put("/patients/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullname } = req.body;

  if (!parseInt(id)) {
    res.status(400).send("400 Bad Request");
    return;
  }

  if (!fullname) {
    res.status(400).send("400 Bad Request");
    return;
  }

  const response = PatientsController.updatePatient(parseInt(id), fullname);

  if (!response) {
    res.status(404).send("404 Not Found");
    return;
  }

  sendJsonResponse(res, response.toJSON());
});

app.delete("/patients/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (!parseInt(id)) {
    res.status(400).send("400 Bad Request");
    return;
  }

  PatientsController.deletePatient(parseInt(id));
  res.status(200).send("DELETE request received");
});


app.use((req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
