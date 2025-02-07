import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DoctorModel } from '../../model/doctor.model';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  imports: [NgFor],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss'
})
export class DoctorListComponent {
    private doctors : DoctorModel[] = [];

    constructor(private doctorService : DoctorService, private router : Router) {
        this.getDoctorsFromService();
    }

    public getDoctors() : DoctorModel[] {
        return this.doctors;
    }

    public getDoctorsFromService() {
        // Call service
        this.doctorService.getDoctors().subscribe(response => {
            this.doctors = response;
        });
    }

    public deleteDoctor(id_doctor : number) : boolean {
        // Call service
        this.doctorService.deleteDoctor(id_doctor).subscribe(response => {
            return response;
        });
        return false;
    }

    public editDoctor(id_doctor : number) {
        this.router.navigate(['/doctors/edit', id_doctor]);
    }

}
