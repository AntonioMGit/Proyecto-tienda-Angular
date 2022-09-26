import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../entidades/producto';

@Component({
  selector: 'app-tienda-filtro',
  templateUrl: './tienda-filtro.component.html',
  styleUrls: ['./tienda-filtro.component.scss']
})
export class TiendaFiltroComponent implements OnInit {

  @Input()
  catalogo:Producto[]=[]

  @Input()
  datosCompartidos:{
    catalogoFiltrado:Producto[]
  }={catalogoFiltrado:[]}
  
  precioMinimo:number=0.0
  precioMaximo:number=0.0

  constructor() { }

  ngOnInit(): void {
  }

  aplicarFiltro(){
    this.datosCompartidos.catalogoFiltrado=this.catalogo.filter(
      (a) => 
        a.precioUnidad <= this.precioMaximo 
          && a.precioUnidad >= this.precioMinimo
    )
    
    
  }

}
