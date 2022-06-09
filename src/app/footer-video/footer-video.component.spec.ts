import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVideoComponent } from './footer-video.component';

describe('FooterVideoComponent', () => {
  let component: FooterVideoComponent;
  let fixture: ComponentFixture<FooterVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
