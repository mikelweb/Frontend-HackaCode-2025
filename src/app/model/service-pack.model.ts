import { MedicalServiceModel } from "./medical-service.model";

export interface ServicePackModel  {
    codigo_paquete : number;
    lista_servicios_incluidos : MedicalServiceModel[];
    precio_paquete : number;
}
