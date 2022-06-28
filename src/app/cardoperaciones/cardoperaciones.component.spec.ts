import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardoperacionesComponent } from './cardoperaciones.component';

describe('CardoperacionesComponent', () => {
  let component: CardoperacionesComponent;
  let fixture: ComponentFixture<CardoperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardoperacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardoperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
