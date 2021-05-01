import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistTemplateComponent } from './watchlist-template.component';

describe('WatchlistTemplateComponent', () => {
  let component: WatchlistTemplateComponent;
  let fixture: ComponentFixture<WatchlistTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
