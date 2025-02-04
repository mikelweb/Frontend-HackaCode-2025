import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PatientModel } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  public getPatients() : Observable<PatientModel[]> {
    // let url : string = '/assets/mock/patients.json';
    let url : string = 'http://localhost:8080/api/v1/persons';

    return this.http.get<PatientModel[]>(url);
  }

  public getPatient(patientId : number) : Observable<PatientModel> {
    // let url : string = '/assets/mock/patient-' + patientId + '.json';
    let url : string = 'http://localhost:8080/api/v1/persons/' + patientId;
    return this.http.get<PatientModel>(url);
  }

  public updatePatient(patient : PatientModel) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/persons/' + patient.id_paciente;
    return this.http.put<boolean>(url, patient);
  }

  public deletePatient(patientId : number) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/persons/' + patientId;
    return this.http.delete<boolean>(url);
  }
}
