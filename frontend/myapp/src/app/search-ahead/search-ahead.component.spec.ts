import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAheadComponent } from './search-ahead.component';

describe('SearchAheadComponent', () => {
  let component: SearchAheadComponent;
  let fixture: ComponentFixture<SearchAheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
