import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
    selector: 'jhi-pagina-prueba',
    templateUrl: './pagina-prueba.component.html',
    styles: ['pagina-prueba.css']
})
export class PaginaPruebaComponent implements OnInit {
    title = 'Testing ng2-dragula';
    vampires = [
        { name: 'Vamp1', favouriteColor: 'amarillo' },
        { name: 'Vamp2', favouriteColor: 'azul' },
        { name: 'Vamp3', favouriteColor: 'verde' },
        { name: 'Vamp4', favouriteColor: 'morao' }
    ];

    constructor(private dragulaService: DragulaService) {}

    ngOnInit() {}
}
