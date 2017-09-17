import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ListaFacultades} from './lista-facu.component';
import {PieComponent}    from './pie.component'
import {FacultadComponent} from './facultad.component'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  ListaFacultades, 
                  PieComponent, 
                  FacultadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
