import { Response } from "express";

export const sendJsonResponse = (res: Response, data: object) => {
  res.status(200).json(data);
};
