import { Component } from '@angular/core';

import {ListaFacultades}   from './lista-facu.component'
import { PieComponent  }   from "./pie.component"
import {FacultadComponent} from './facultad.component'

@Component({
  selector: 'my-app',
  template: `<h1>Complutense</h1>
              <listafacu></listafacu>
  `,
})
export class AppComponent  { 
  
 }
