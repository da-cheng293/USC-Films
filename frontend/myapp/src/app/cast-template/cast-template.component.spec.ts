import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastTemplateComponent } from './cast-template.component';

describe('CastTemplateComponent', () => {
  let component: CastTemplateComponent;
  let fixture: ComponentFixture<CastTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
