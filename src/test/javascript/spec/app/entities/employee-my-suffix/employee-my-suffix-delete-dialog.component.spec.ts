/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Prueba2TestModule } from '../../../test.module';
import { EmployeeMySuffixDeleteDialogComponent } from 'app/entities/employee-my-suffix/employee-my-suffix-delete-dialog.component';
import { EmployeeMySuffixService } from 'app/entities/employee-my-suffix/employee-my-suffix.service';

describe('Component Tests', () => {
    describe('EmployeeMySuffix Management Delete Component', () => {
        let comp: EmployeeMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<EmployeeMySuffixDeleteDialogComponent>;
        let service: EmployeeMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Prueba2TestModule],
                declarations: [EmployeeMySuffixDeleteDialogComponent]
            })
                .overrideTemplate(EmployeeMySuffixDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(EmployeeMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EmployeeMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
