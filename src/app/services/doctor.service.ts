import { Injectable } from '@angular/core';
import { DoctorModel } from '../model/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  public getDoctors() : Observable<DoctorModel[]> {
    // let url : string = '/assets/mock/patients.json';
    let url : string = 'http://localhost:8080/api/v1/doctors';

    return this.http.get<DoctorModel[]>(url);
  }

  public getDoctor(doctorId : number) : Observable<DoctorModel> {
    // let url : string = '/assets/mock/patient-' + doctorId + '.json';
    let url : string = 'http://localhost:8080/api/v1/doctors/' + doctorId;
    return this.http.get<DoctorModel>(url);
  }

  public updateDoctor(doctor : DoctorModel) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/doctors/' + doctor.id_doctor;
    return this.http.put<boolean>(url, doctor);
  }

  public deleteDoctor(doctorId : number) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/doctors/' + doctorId;
    return this.http.delete<boolean>(url);
  }
}
