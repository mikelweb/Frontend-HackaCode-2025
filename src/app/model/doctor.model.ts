import { Especialidad } from "./especialidad.model";
import { PersonModel } from "./person.model";

export interface DoctorModel extends PersonModel {
    id_doctor : number ;
    especialidad : Especialidad;
    turnos_disponibles : string;
    sueldo: number;
}