import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaAlumnoComponent } from './ficha-alumno/ficha-alumno.component';
import { TiendaAppComponent } from './tienda-app/tienda-app.component';
import { TiendaFiltroComponent } from './tienda-filtro/tienda-filtro.component';
import { TiendaCatalogoComponent } from './tienda-catalogo/tienda-catalogo.component';
import { TiendaCarritoComponent } from './tienda-carrito/tienda-carrito.component';
import { ProbarEnrutadoComponent } from './probar-enrutado/probar-enrutado.component';
import { TiendaProductoComponent } from './tienda-producto/tienda-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaAlumnoComponent,
    TiendaAppComponent,
    TiendaFiltroComponent,
    TiendaCatalogoComponent,
    TiendaCarritoComponent,
    ProbarEnrutadoComponent,
    TiendaProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    //AppComponent
    //FichaAlumnoComponent
    //TiendaAppComponent
    ProbarEnrutadoComponent
  ]
})
export class AppModule { }
