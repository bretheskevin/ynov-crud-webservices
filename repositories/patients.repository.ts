import {Patient} from "../models/patient.model";

let patients: Patient[] = [];
let id: number = 1;

export class PatientsRepository {
  static getPatients(): Patient[] {
    return patients;
  }

  static getPatientById(id: number): Patient | undefined {
    return patients.find(patient => patient.id === id);
  }

  static createPatient(fullname: string): Patient {
    let patient: Patient = new Patient(fullname);
    patient.id = id;
    id++;
    patients.push(patient);

    return patient;
  }

  static updatePatientById(id: number, fullname: string): Patient | undefined {
    const patient: Patient | undefined = this.getPatientById(id);
    if (patient) {
      patient.fullName = fullname;
      patients = patients.map(patient => patient.id === id ? patient : patient);
      return patient;
    }
  }

  static deletePatientById(id: number) {
    patients = patients.filter(patient => patient.id !== id);
  }
}
