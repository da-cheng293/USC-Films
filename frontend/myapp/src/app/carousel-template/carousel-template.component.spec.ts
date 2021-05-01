import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTemplateComponent } from './carousel-template.component';

describe('CarouselTemplateComponent', () => {
  let component: CarouselTemplateComponent;
  let fixture: ComponentFixture<CarouselTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
