import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapagoogleComponent } from './mapagoogle.component';

describe('MapagoogleComponent', () => {
  let component: MapagoogleComponent;
  let fixture: ComponentFixture<MapagoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapagoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapagoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
