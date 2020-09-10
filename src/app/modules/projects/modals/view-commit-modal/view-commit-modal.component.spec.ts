import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommitModalComponent } from './view-commit-modal.component';

describe('ViewCommitModalComponent', () => {
  let component: ViewCommitModalComponent;
  let fixture: ComponentFixture<ViewCommitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
