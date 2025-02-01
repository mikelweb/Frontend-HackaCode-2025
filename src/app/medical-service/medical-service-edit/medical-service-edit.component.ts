import { ChangeDetectorRef, Component } from '@angular/core';
import { MedicalServiceModel } from '../../model/medical-service.model';
import { MedicalServicesService } from '../../services/medical-services.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-service-edit',
  imports: [FormsModule, NgIf],
  templateUrl: './medical-service-edit.component.html',
  styleUrl: './medical-service-edit.component.scss'
})

export class MedicalServiceEditComponent implements MedicalServiceModel {

    public codigo_servicio : number = 0;
    public nombre : string = '';
    public descripcion : string = '';
    public precio : number = 0;

    private id : number;
    
    constructor(private medicalServiceService : MedicalServicesService, private activatedRoute : ActivatedRoute, private change: ChangeDetectorRef) {
        this.id = activatedRoute.snapshot.params['id'];
        this.getMedicalService(this.id);
    }

    public getMedicalService(id : number) : void {
        // Call service
        this.medicalServiceService.getMedicalService(id).subscribe(response => {
            let medicalService : MedicalServiceModel = response;
            this.codigo_servicio = medicalService.codigo_servicio;
            this.nombre = medicalService.nombre;
            this.descripcion = medicalService.descripcion;
            this.precio = medicalService.precio;
        });
    }

    public updateMedicalService() : void {
        // Call service
        let medicalService : MedicalServiceModel = {
            codigo_servicio : this.codigo_servicio,
            nombre : this.nombre,
            descripcion : this.descripcion,
            precio : this.precio
        };
        this.medicalServiceService.updateMedicalService(medicalService);
    }
}
