import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ServicePackModel } from '../model/service-pack.model';

@Injectable({
  providedIn: 'root'
})
export class ServicePackService {

  constructor(private http: HttpClient) { }

  public getServicePacks() : Observable<ServicePackModel[]> {
    let url : string = '/assets/mock/servicepacks.json';
    // let url : string = 'http://localhost:8080/api/v1/servicepacks';
    return this.http.get<ServicePackModel[]>(url);
  }

  public getServicePack(codigo_paquete : number) : Observable<ServicePackModel> {
    let url : string = '/assets/mock/servicepack-' + codigo_paquete + '.json';
    //  url : string = 'http://localhost:8080/api/v1/servicepack/' + codigo_paquete;
    return this.http.get<ServicePackModel>(url);
  }

  public updateServicePack(servicePack : ServicePackModel) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/servicepack/' + servicePack.codigo_paquete;
    return this.http.put<boolean>(url, servicePack);
  }

  public deleteServicePack(codigo_paquete : number) : Observable<boolean> {
    let url : string = 'http://localhost:8080/api/v1/servicepack/' + codigo_paquete;
    return this.http.delete<boolean>(url);
  }
}
