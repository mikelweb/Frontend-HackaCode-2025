import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { PatientModel } from '../../model/patient.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-edit',
  imports: [FormsModule],
  templateUrl: './patient-edit.component.html',
  styleUrl: './patient-edit.component.scss'
})
export class PatientEditComponent implements PatientModel {

    public id_paciente: number;
    public id_persona: number = 0;
    public nombre: string = "";
    public apellido: string = "";
    public dni: string = "";
    public fecha_nac: string = "";
    public email: string = "";
    public telefono: string = "";
    public direccion: string = "";
        
    constructor(private patientService : PatientService, private activatedRoute : ActivatedRoute) {
        this.id_paciente = activatedRoute.snapshot.params['id'];
        this.getPatient(this.id_paciente);
    }

    public getPatient(id : number) : void {
        // Call service
        this.patientService.getPatient(id).subscribe(response => {
            let patient : PatientModel = response;
            this.id_paciente = patient.id_paciente;
            this.id_persona = patient.id_persona;
            this.nombre = patient.nombre;
            this.apellido = patient.apellido;
            this.dni = patient.dni;
            this.fecha_nac = patient.fecha_nac;
            this.email = patient.email;
            this.telefono = patient.telefono;
            this.direccion = patient.direccion;
        });
    }

    public updatePatient() : void {
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
        this.patientService.updatePatient(patient);
    }
}
