import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ServicePackModel } from '../../model/service-pack.model';
import { Router } from '@angular/router';
import { ServicePackService } from '../../services/service-pack.service';

@Component({
  selector: 'app-service-pack-list',
  imports: [NgFor],
  templateUrl: './service-pack-list.component.html',
  styleUrl: './service-pack-list.component.scss'
})

export class ServicePackListComponent {
  private servicePacks : ServicePackModel[] = [];

  constructor(private servicePackService : ServicePackService, private router : Router) {
    this.getServicePacksFromService();
  }

  public getServicePacks() : ServicePackModel[] {
    return this.servicePacks;
  }

  public getServicePacksFromService() {
    // Call service
    this.servicePackService.getServicePacks().subscribe(response => {
      this.servicePacks = response;
    });
  }

  public deleteServicePack(codigo_paquete : number) : boolean {
    // Call service
    this.servicePackService.deleteServicePack(codigo_paquete).subscribe(response => {
      return response;
    });
    return false;
  }

  public editServicePack(codigo_paquete : number) {
    this.router.navigate(['/service-packs/edit', codigo_paquete]);
  }
}
