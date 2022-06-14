import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiplanComponent } from './miplan.component';

describe('MiplanComponent', () => {
  let component: MiplanComponent;
  let fixture: ComponentFixture<MiplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
