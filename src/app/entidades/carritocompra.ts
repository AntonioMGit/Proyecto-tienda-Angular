import { Producto } from "./producto";

export class Compra{
    constructor(
        public referencia:Producto,
        public cantidad:number
    ){

    }
}
export class CarritoCompra{
    productosComprados:Compra[]=[]
    total:number=0.0

    guardarCompra(compra:Compra){
        let compraExistente=this.productosComprados.find((c:Compra) => c.referencia==compra.referencia)
    
        if(compraExistente){
            compraExistente.cantidad += compra.cantidad
        }else{
            this.productosComprados.push(compra)
        }
    }
   
    quitarCompra(compra:Compra){
        let indice=this.productosComprados.findIndex((c:Compra)=>c==compra)

        if(indice>=0){
            this.productosComprados.splice(indice, 1)
        }
    }
}