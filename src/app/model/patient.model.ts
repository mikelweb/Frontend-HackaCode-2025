import { PersonModel } from "./person.model";

export interface PatientModel extends PersonModel {
    id_paciente : number ;
}