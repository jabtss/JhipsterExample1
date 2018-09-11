import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Prueba2RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { Prueba2CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { Prueba2LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { Prueba2DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { Prueba2TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { Prueba2EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Prueba2JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { Prueba2JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Prueba2RegionMySuffixModule,
        Prueba2CountryMySuffixModule,
        Prueba2LocationMySuffixModule,
        Prueba2DepartmentMySuffixModule,
        Prueba2TaskMySuffixModule,
        Prueba2EmployeeMySuffixModule,
        Prueba2JobMySuffixModule,
        Prueba2JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Prueba2EntityModule {}
