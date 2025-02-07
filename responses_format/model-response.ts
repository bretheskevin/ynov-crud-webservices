import {BaseModel} from "../models/base.model";
import {BaseResponse} from "./base-response";


export class ModelResponse<T extends BaseModel> extends BaseResponse {
  model: T;

  constructor(model: T) {
    super();
    this.model = model;
  }

  toJSON(): T {
    return this.model;
  }
}
