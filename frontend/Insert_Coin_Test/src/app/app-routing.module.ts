import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { InformacionConciertoComponent } from './informacion-concierto/informacion-concierto.component';
import { RegistroConciertoComponent } from './registro-concierto/registro-concierto.component';

const routes: Routes = [
  { path: '', redirectTo: '/conciertos', pathMatch: 'full' },
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'conciertos', component: RegistroConciertoComponent },
  { path: 'concierto/:id', component: InformacionConciertoComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: '**', redirectTo: '/conciertos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
