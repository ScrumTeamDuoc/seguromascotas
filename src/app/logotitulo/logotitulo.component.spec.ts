import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotituloComponent } from './logotitulo.component';

describe('LogotituloComponent', () => {
  let component: LogotituloComponent;
  let fixture: ComponentFixture<LogotituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogotituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogotituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
