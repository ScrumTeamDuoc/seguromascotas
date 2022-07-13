import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcontrataComponent } from './cardcontrata.component';

describe('CardcontrataComponent', () => {
  let component: CardcontrataComponent;
  let fixture: ComponentFixture<CardcontrataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcontrataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcontrataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
