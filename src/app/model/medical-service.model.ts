export class MedicalServiceModel  {

    private codigo_servicio : number = 0;
    private nombre : string = '';
    private descripcion : string = '';
    private precio : number = 0;

    public MedicalServiceModel(codigo_servicio : number, nombre : string, descripcion : string, precio : number) {
        this.codigo_servicio = codigo_servicio;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    public getCodigo_servicio() : number {
        return this.codigo_servicio;
    }
    public getNombre() : string {
        return this.nombre;
    }
    public getDescripcion() : string {
        return this.descripcion;
    }
    public getPrecio() : number {
        return this.precio;
    }

    public setCodigo_servicio(codigo_servicio : number) {
        this.codigo_servicio = codigo_servicio;
    }
    public setNombre(nombre : string) {
        this.nombre = nombre;
    }
    public setDescripcion(descripcion : string) {
        this.descripcion = descripcion;
    }
    public setPrecio(precio : number) {
        this.precio = precio;
    }

}
