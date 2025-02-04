import { Component } from '@angular/core';
import { ServicePackModel } from '../../model/service-pack.model';
import { FormsModule } from '@angular/forms';
import { MedicalServiceModel } from '../../model/medical-service.model';
import { ServicePackService } from '../../services/service-pack.service';
import { ActivatedRoute } from '@angular/router';
import { MedicalServicesService } from '../../services/medical-services.service';
import { NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-service-pack-edit',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './service-pack-edit.component.html',
  styleUrl: './service-pack-edit.component.scss'
})
export class ServicePackEditComponent implements ServicePackModel {

  public codigo_paquete: number = 0;
  public lista_servicios_incluidos: MedicalServiceModel[] = [];
  public precio_paquete: number = 0;

  public lista_todos_servicios: MedicalServiceModel[] = [];

  constructor(private servicePackService : ServicePackService,
              private medicalServiceService : MedicalServicesService,
              private activatedRoute : ActivatedRoute) {
    this.codigo_paquete = activatedRoute.snapshot.params['id'];
    this.getAllMedicalServices();
    this.getServicePack(this.codigo_paquete);
  }

  public getAllMedicalServices() : void {
    // Call service
    this.medicalServiceService.getMedicalServices().subscribe(response => {
      this.lista_todos_servicios = response;
    });
  }

  public getServicePack(codigo_paquete : number) : void {
    // Call service
    this.servicePackService.getServicePack(codigo_paquete).subscribe(response => {
      let servicePack : ServicePackModel = response;
      this.codigo_paquete = servicePack.codigo_paquete;
      this.lista_servicios_incluidos = servicePack.lista_servicios_incluidos;
      this.precio_paquete = servicePack.precio_paquete;
    });
  }

  public updateServicePack() : void {
    // Call service
    let servicePack : ServicePackModel = {
      codigo_paquete : this.codigo_paquete,
      lista_servicios_incluidos : this.lista_servicios_incluidos,
      precio_paquete : this.precio_paquete
    };
    this.servicePackService.updateServicePack(servicePack);
  }

  public isIncluded(service : MedicalServiceModel) : boolean {
    return this.lista_servicios_incluidos.some(s => s.codigo_servicio == service.codigo_servicio)
  }
}