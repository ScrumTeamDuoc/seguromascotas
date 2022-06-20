import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultascardsComponent } from './consultascards.component';

describe('ConsultascardsComponent', () => {
  let component: ConsultascardsComponent;
  let fixture: ComponentFixture<ConsultascardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultascardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultascardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
