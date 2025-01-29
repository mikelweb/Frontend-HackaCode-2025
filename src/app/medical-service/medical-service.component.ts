import { Component } from '@angular/core';
import { MedicalServiceModel } from '../model/medical-service.model';

@Component({
  selector: 'app-medical-service',
  imports: [],
  templateUrl: './medical-service.component.html',
  styleUrl: './medical-service.component.scss'
})
export class MedicalServiceComponent  {

    private medicalServices : MedicalServiceModel[] = [];

    public MedicalServiceComponent(medicalServices: MedicalServiceModel[]) {
        this.medicalServices = medicalServices;
    }

}
