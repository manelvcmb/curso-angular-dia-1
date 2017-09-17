import { Component, Input } from '@angular/core';
import {Facultad}           from './facultad'

@Component({  
    selector: 'facultad',
    templateUrl: './facultad.template.html'
})

export class FacultadComponent {
    @Input() facultad: Facultad;
    
}


