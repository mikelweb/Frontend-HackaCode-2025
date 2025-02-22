import { Component } from '@angular/core';
import { PatientModel } from '../../model/patient.model';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-patient-list',
  imports: [NgFor, DatePipe],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent {
    private patients : PatientModel[] = [];

    constructor(private patientService : PatientService, private router : Router) {
        this.getPatientsFromService();
    }

    public getPatients() : PatientModel[] {
        return this.patients;
    }

    public getPatientsFromService() {
        // Call service
        this.patientService.getPatients().subscribe(response => {
            this.patients = response;
        });
    }

    public deletePatient(id_paciente : number) : boolean {
        // Call service
        this.patientService.deletePatient(id_paciente).subscribe(response => {
            return response;
        });
        return false;
    }

    public editPatient(id_paciente : number) {
        this.router.navigate(['/patients/edit', id_paciente]);
    }

}
