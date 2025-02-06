import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AppointmentModel } from '../../model/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  imports: [NgFor],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent {

    private appointments : AppointmentModel[] = [];
  
    constructor(private appointmentService : AppointmentService, private router : Router) {
      this.getAppointmentsFromService();
    }
  
    public getAppointments() : AppointmentModel[] {
      return this.appointments;
    }
  
    public getAppointmentsFromService() {
      // Call service
      this.appointmentService.getAppointments().subscribe(response => {
        this.appointments = response;
      });
    }
  
    public deleteAppointment(id : number) : boolean {
      // Call service
      this.appointmentService.deleteAppointment(id).subscribe(response => {
        return response;
      });
      return false;
    }
  
    public editAppointment(id : number) {
      this.router.navigate(['/appointments/edit', id]);
    }

}
