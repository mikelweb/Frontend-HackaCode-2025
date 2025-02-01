import { Injectable } from '@angular/core';
import { MedicalServiceModel } from '../model/medical-service.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MedicalServicesService {

  constructor(private http: HttpClient) { }

  public getMedicalServices() : Observable<MedicalServiceModel[]> {
    let url : string = '/assets/mock/medical-services.json';
    return this.http.get<MedicalServiceModel[]>(url);
  }

  public getMedicalService(medicalServiceId : number) : Observable<MedicalServiceModel> {
    let url : string = '/assets/mock/medical-service-' + medicalServiceId + '.json';
    return this.http.get<MedicalServiceModel>(url);
  }

  public updateMedicalService(medicalService : MedicalServiceModel) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/medicalservice/' + medicalService.codigo_servicio;
    return this.http.put<boolean>(url, medicalService);
  }

  public deleteMedicalService(medicalServiceId : number) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/medicalservice/' + medicalServiceId;
    return this.http.delete<boolean>(url);
  }
}
