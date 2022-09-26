import { Component, Input, OnInit } from '@angular/core';
import { CarritoCompra, Compra } from '../entidades/carritocompra';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-catalogo',
  templateUrl: './tienda-catalogo.component.html',
  styleUrls: ['./tienda-catalogo.component.scss']
})
export class TiendaCatalogoComponent implements OnInit {

  @Input()
  catalogo:Producto[]=[]
  @Input()
  carrito:CarritoCompra = new CarritoCompra()

  constructor() { }

  ngOnInit(): void {
  }

  comprarProducto(que:Producto){
    this.carrito.guardarCompra(new Compra(que,1))
  }

}
