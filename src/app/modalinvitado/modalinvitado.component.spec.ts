import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinvitadoComponent } from './modalinvitado.component';

describe('ModalinvitadoComponent', () => {
  let component: ModalinvitadoComponent;
  let fixture: ComponentFixture<ModalinvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalinvitadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalinvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
