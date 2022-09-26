export class Producto{
    static contadorId:number=1

    id:number

    constructor(
        public nombre:string,
        public descripcion:string,
        public precioUnidad:number,
        public categoria:string="",
        public disponible:boolean=true,
        public almacenStock:number=10
    ){
        this.id=Producto.contadorId++
    }
}