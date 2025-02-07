import { Router, Request, Response } from "express";
import {PatientsController} from "../controllers/patients.controller";
import {sendJsonResponse} from "../helpers/send-json-response";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const response = PatientsController.getPatients();
  sendJsonResponse(res, response.toJSON());
});

router.get("/:id", (req: Request, res: Response) => {
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

router.post("/", (req: Request, res: Response) => {
  const { fullname } = req.body;

  if (!fullname) {
    res.status(400).send("400 Bad Request");
    return;
  }

  const response = PatientsController.createPatient(fullname);

  sendJsonResponse(res, response.toJSON());
});

router.put("/:id", (req: Request, res: Response) => {
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

router.delete("/:id", authMiddleware, (req: Request, res: Response) => {
  const { id } = req.params;

  if (!parseInt(id)) {
    res.status(400).send("400 Bad Request");
    return;
  }

  PatientsController.deletePatient(parseInt(id));
  res.status(200).send("DELETE request received");
});

export default router;
