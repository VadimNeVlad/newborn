import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsViewComponent } from './positions-view.component';

describe('PositionsViewComponent', () => {
  let component: PositionsViewComponent;
  let fixture: ComponentFixture<PositionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
