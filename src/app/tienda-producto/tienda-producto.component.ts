import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-producto',
  templateUrl: './tienda-producto.component.html',
  styleUrls: ['./tienda-producto.component.scss']
})
export class TiendaProductoComponent implements OnInit {

  producto:Producto | undefined

  constructor(
    public ruta:ActivatedRoute,
    public location:Location
  ) { }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(
      (parametros:ParamMap)=>{
        let idProducto = parametros.get("id")

        this.producto = new Producto(
          "Producto " + idProducto,
          "Desc " + idProducto,
          800-0
        )

        this.producto.id= idProducto ? parseInt(idProducto):-1
      }
    )
  }

}
