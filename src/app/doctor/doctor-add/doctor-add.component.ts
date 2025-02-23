import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { DoctorModel } from '../../model/doctor.model';
import { Especialidad } from '../../model/especialidad.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-doctor-add',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './doctor-add.component.html',
  styleUrl: './doctor-add.component.scss'
})
export class DoctorAddComponent {

  public especialidades : string[] = [];

  public id_doctor: number = 0;
  public id_persona: number = 0;
  public nombre: string = "";
  public apellido: string = "";
  public dni: string = "";
  public fecha_nac: string = "";
  public email: string = "";
  public telefono: string = "";
  public direccion: string = "";
  public especialidad!: Especialidad;
  public turnos_disponibles : string = "";
  public sueldo: number = 0;
      
  constructor(private doctorService : DoctorService) {
    // console.log(Object.values(Especialidad));
    this.especialidades = Object.values(Especialidad);
    
  }

  public addDoctor() : void {
    // Call service
    let doctor : DoctorModel = {
        id_doctor : this.id_doctor,
        id_persona : this.id_persona,
        nombre : this.nombre,
        apellido : this.apellido,
        dni : this.dni,
        fecha_nac : this.fecha_nac,
        email : this.email,
        telefono : this.telefono,
        direccion : this.direccion,
        especialidad : this.especialidad,
        turnos_disponibles : this.turnos_disponibles,
        sueldo : this.sueldo
      };

      this.doctorService.addDoctor(doctor).subscribe(response => {
        console.log(response);
      });
  }
}