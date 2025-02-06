import { Component } from '@angular/core';
import { MedicalServiceModel } from '../../model/medical-service.model';
import { NgFor } from '@angular/common';
import { MedicalServicesService } from '../../services/medical-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-service',
  imports: [NgFor],
  templateUrl: './medical-service-list.component.html',
  styleUrl: './medical-service-list.component.scss'
})
export class MedicalServiceListComponent {

    private medicalServices : MedicalServiceModel[] = [];

    constructor(private medicalServiceService : MedicalServicesService, private router : Router) {
        this.getMedicalServicesFromService();
    }

    public getMedicalServices() : MedicalServiceModel[] {
        return this.medicalServices;
    }

    public getMedicalServicesFromService() {
        // Call service
        this.medicalServiceService.getMedicalServices().subscribe(response => {
            this.medicalServices = response;
        });
    }

    public deleteService(codigo_servicio : number) : boolean {
        // Call service
        this.medicalServiceService.deleteMedicalService(codigo_servicio).subscribe(response => {
            return response;
        });
        return false;
    }

    public editService(codigo_servicio : number) {
        this.router.navigate(['/services/edit', codigo_servicio]);
    }
}
