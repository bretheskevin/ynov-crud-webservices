import {Patient} from "../models/patient.model";
import {PatientsRepository} from "../repositories/patients.repository";
import {ModelsResponse} from "../responses_format/models-response";
import {ModelResponse} from "../responses_format/model-response";

export class PatientsController {
  static getPatients(): ModelsResponse<Patient> {
    const patients: Patient[] = PatientsRepository.getPatients();

    return new ModelsResponse(patients);
  }

  static getPatient(param: number): ModelResponse<Patient> | undefined {
    let patient: Patient | undefined = PatientsRepository.getPatientById(param);
    return patient ? new ModelResponse(patient) : undefined;
  }

  static createPatient(fullname: string): ModelResponse<Patient> {
    const patient: Patient = PatientsRepository.createPatient(fullname);
    return new ModelResponse(patient);
  }

  static updatePatient(param: number, fullname: string): ModelResponse<Patient> | undefined {
    let patient: Patient | undefined = PatientsRepository.updatePatientById(param, fullname);
    return patient ? new ModelResponse(patient) : undefined;
  }

  static deletePatient(param: number) {
    PatientsRepository.deletePatientById(param);
  }
}
