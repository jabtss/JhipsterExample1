import { Routes } from '@angular/router';

import { auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, trackerRoute, userMgmtRoute } from './';

import { UserRouteAccessService } from 'app/core';
import { paginaPruebaRoute } from './pagina-prueba/pagina-prueba.route';

const ADMIN_ROUTES = [auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, trackerRoute, ...userMgmtRoute, metricsRoute, paginaPruebaRoute];

export const adminState: Routes = [
    {
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [UserRouteAccessService],
        children: ADMIN_ROUTES
    }
];
