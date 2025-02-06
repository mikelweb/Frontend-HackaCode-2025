import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppointmentModel } from '../model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

    public getAppointments() : Observable<AppointmentModel[]> {
      // let url : string = '/assets/mock/appointments.json';
      let url : string = 'http://localhost:8080/api/v1/appointments';
  
      return this.http.get<AppointmentModel[]>(url);
    }
  
    public getAppointment(id : number) : Observable<AppointmentModel> {
      // let url : string = '/assets/mock/appointment-' + id + '.json';
      let url : string = 'http://localhost:8080/api/v1/appointments/' + id;
      return this.http.get<AppointmentModel>(url);
    }
  
    public updateAppointment(appointment : AppointmentModel) : Observable<boolean> {
      let url : string = 'http://localhost:8080/api/v1/appointments/' + appointment.id;
      return this.http.put<boolean>(url, appointment);
    }
  
    public deleteAppointment(id : number) : Observable<boolean> {
      let url : string = 'http://localhost:8080/api/v1/appointments/' + id;
      return this.http.delete<boolean>(url);
    }
}
