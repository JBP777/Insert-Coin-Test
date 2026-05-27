import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { InformacionConciertoComponent } from './informacion-concierto/informacion-concierto.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { RegistroConciertoComponent } from './registro-concierto/registro-concierto.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    InformacionConciertoComponent,
    ImagenesComponent,
    RegistroConciertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
