import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTvTemplateComponent } from './details-tv-template.component';

describe('DetailsTvTemplateComponent', () => {
  let component: DetailsTvTemplateComponent;
  let fixture: ComponentFixture<DetailsTvTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTvTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTvTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
