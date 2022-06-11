import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardserviciosComponent } from './cardservicios.component';

describe('CardserviciosComponent', () => {
  let component: CardserviciosComponent;
  let fixture: ComponentFixture<CardserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardserviciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
