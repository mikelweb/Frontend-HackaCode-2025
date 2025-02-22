import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { PatientModel } from '../../model/patient.model';

@Component({
  selector: 'app-patient-add',
  imports: [FormsModule],
  templateUrl: './patient-add.component.html',
  styleUrl: './patient-add.component.scss'
})
export class PatientAddComponent {

  public id_paciente: number = 0;
  public id_persona: number = 0;
  public nombre: string = "";
  public apellido: string = "";
  public dni: string = "";
  public fecha_nac: string = "";
  public email: string = "";
  public telefono: string = "";
  public direccion: string = "";
      
  constructor(private patientService : PatientService) {}

  public savePatient() : void {
      // Call service
      let patient : PatientModel = {
          id_paciente : this.id_paciente,
          id_persona : this.id_persona,
          nombre : this.nombre,
          apellido : this.apellido,
          dni : this.dni,
          fecha_nac : this.fecha_nac,
          email : this.email,
          telefono : this.telefono,
          direccion : this.direccion
      };
      this.patientService.savePatient(patient);
  }
}
