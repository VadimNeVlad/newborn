import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewNoteComponent } from './overview-note.component';

describe('OverviewNoteComponent', () => {
  let component: OverviewNoteComponent;
  let fixture: ComponentFixture<OverviewNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
