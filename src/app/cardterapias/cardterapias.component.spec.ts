import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardterapiasComponent } from './cardterapias.component';

describe('CardterapiasComponent', () => {
  let component: CardterapiasComponent;
  let fixture: ComponentFixture<CardterapiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardterapiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardterapiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
