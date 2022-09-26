import { Component, OnInit } from '@angular/core';
import { CarritoCompra } from '../entidades/carritocompra';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-app',
  templateUrl: './tienda-app.component.html',
  styleUrls: ['./tienda-app.component.scss']
})
export class TiendaAppComponent implements OnInit {

  catalogoProductos:Producto[] = []

  datosCompartidos:{
    catalogoFiltrado:Producto[],
    carrito:CarritoCompra
  }={catalogoFiltrado:[], carrito:new CarritoCompra()}

  constructor() { }

  ngOnInit(): void {
    Producto.contadorId=1
    for (let i = 0; i < 20; i++) {
      this.catalogoProductos.push(
        new Producto("prod"+i, "desc"+i, Math.random()*1000.0+20.0)
      )
    }
    this.datosCompartidos.catalogoFiltrado=this.catalogoProductos
  }

}
