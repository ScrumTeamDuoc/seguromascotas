import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarconsultaComponent } from './solicitarconsulta.component';

describe('SolicitarconsultaComponent', () => {
  let component: SolicitarconsultaComponent;
  let fixture: ComponentFixture<SolicitarconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarconsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
