import { Route } from '@angular/router';
import { PaginaPruebaComponent } from './pagina-prueba.component';

export const paginaPruebaRoute: Route = {
    path: 'jhi-pagina-prueba',
    component: PaginaPruebaComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};