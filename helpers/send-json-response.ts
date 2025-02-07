import {ServerResponse} from "http";

export const sendJsonResponse = (res: ServerResponse, data: object) => {
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(data) + "\n");
}
