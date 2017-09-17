import {Component} from '@angular/core'
import {Facultad}  from './facultad'
import {FacultadComponent} from './facultad.component'

@Component({
    moduleId: module.id,
    selector: 'listafacu',
    templateUrl: 'lista-facu.template.html'
})
export class ListaFacultades{
    listaFacu: Facultad[];
    seleccion: Facultad;
    colorFacu: string = "blue";
    constructor() {
        this.listaFacu = [
            new Facultad(1, "Derecho", "Moncloa", 10000, 100),
            new Facultad(2, "Economia", "Somosaguas", 1000, 50),
            new Facultad(3, "Físicas", "Moncloa", 300, 10),
            new Facultad(4, "Informática", "Moncloa", 2000, 60),
            new Facultad(5, "Psicología", "Somosaguas", 5000, 120)       
        ]
    }

    seleccionar(facu:Facultad){
        this.seleccion = facu
    }

    cerrar(){
        this.seleccion = undefined
    }
}