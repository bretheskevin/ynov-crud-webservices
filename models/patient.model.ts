import {BaseModel} from "./base.model";

export class Patient extends BaseModel {
  fullName: string = "";

  constructor(fullName: string) {
    super();
    this.fullName = fullName;
  }
}
