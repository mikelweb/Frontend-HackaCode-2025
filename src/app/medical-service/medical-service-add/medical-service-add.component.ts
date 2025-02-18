import { Component } from '@angular/core';
import { MedicalServicesService } from '../../services/medical-services.service';
import { MedicalServiceModel } from '../../model/medical-service.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medical-service-add',
  imports: [FormsModule],
  templateUrl: './medical-service-add.component.html',
  styleUrl: './medical-service-add.component.scss'
})
export class MedicalServiceAddComponent {

  public nombre : string = '';
  public descripcion : string = '';
  public precio : number = 0;

  
  constructor(private medicalServiceService : MedicalServicesService) { }

  public createMedicalService() : void {
      // Call service
      let medicalService : MedicalServiceModel = {
          codigo_servicio : 0,
          nombre : this.nombre,
          descripcion : this.descripcion,
          precio : this.precio
      };
      this.medicalServiceService.createMedicalService(medicalService).subscribe(response => {
        console.log(response);
      });
  }
}