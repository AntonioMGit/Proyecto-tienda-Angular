import { Component, Input, OnInit } from '@angular/core';
import { CarritoCompra, Compra } from '../entidades/carritocompra';

@Component({
  selector: 'app-tienda-carrito',
  templateUrl: './tienda-carrito.component.html',
  styleUrls: ['./tienda-carrito.component.scss']
})
export class TiendaCarritoComponent implements OnInit {
  @Input()
  carrito:CarritoCompra=new CarritoCompra()

  constructor() { }

  ngOnInit(): void {
  }

  quitarCompra(que:Compra){
    this.carrito.quitarCompra(que)
  }
}
