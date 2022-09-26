import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FichaAlumnoComponent } from './ficha-alumno/ficha-alumno.component';
import { TiendaAppComponent } from './tienda-app/tienda-app.component';
import { TiendaProductoComponent } from './tienda-producto/tienda-producto.component';

const routes: Routes = [
  {
    path:"angular",component:AppComponent
  },
  {
    path:"alumno",component:FichaAlumnoComponent
  },
  {
    path:"tienda",component:TiendaAppComponent
  },
  {
    path:"producto/:id",component:TiendaProductoComponent
  },
  {
    path:"",redirectTo:"/tienda",pathMatch:"full"
  },
  {
    path:"**",redirectTo:"/tienda",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
