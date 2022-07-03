import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsresponsiveComponent } from './cardsresponsive.component';

describe('CardsresponsiveComponent', () => {
  let component: CardsresponsiveComponent;
  let fixture: ComponentFixture<CardsresponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsresponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
