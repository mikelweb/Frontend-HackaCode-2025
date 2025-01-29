import { Component, OnInit } from '@angular/core';
import { MedicalServiceModel } from '../../model/medical-service.model';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-medical-service',
  imports: [NgFor],
  templateUrl: './medical-service-list.component.html',
  styleUrl: './medical-service-list.component.scss'
})
export class MedicalServiceListComponent implements OnInit {

    private medicalServices : MedicalServiceModel[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getMedicalServicesFromAPI();
    }

    public getMedicalServices() : MedicalServiceModel[] {
        return this.medicalServices;
    }

    public getMedicalServicesFromAPI() {
        // Call to API
        this.http.get<MedicalServiceModel[]>('/assets/mock/medical-services.json').subscribe(response => {
            this.medicalServices = response;
        });
    }
}
