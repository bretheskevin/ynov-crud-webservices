import {BaseModel} from "../models/base.model";
import {BaseResponse} from "./base-response";

interface IModelsResponse<T extends BaseModel> {
  models: T[];
  count: number;
}

export class ModelsResponse<T extends BaseModel> extends BaseResponse {
  models: T[];
  count: number;

  constructor(models: T[]) {
    super();
    this.models = models;
    this.count = models.length;
  }

  toJSON(): IModelsResponse<T> {
    return {
      models: this.models,
      count: this.count,
    }
  }
}
