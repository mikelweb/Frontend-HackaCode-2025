import { DoctorModel } from "./doctor.model";
import { PatientModel } from "./patient.model";

export interface AppointmentModel {
    id : number;
    fecha_consulta : Date;
    hora_consulta : Date;
    un_paciente : PatientModel;
    un_medico : DoctorModel;
    id_servicio_o_paquete : number;
    monto_total : number;
    pagado_o_no : boolean;
}