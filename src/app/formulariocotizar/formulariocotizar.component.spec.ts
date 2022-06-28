import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocotizarComponent } from './formulariocotizar.component';

describe('FormulariocotizarComponent', () => {
  let component: FormulariocotizarComponent;
  let fixture: ComponentFixture<FormulariocotizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariocotizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariocotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
