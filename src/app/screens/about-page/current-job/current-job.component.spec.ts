import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentJobComponent } from './current-job.component';

describe('CurrentJobComponent', () => {
  let component: CurrentJobComponent;
  let fixture: ComponentFixture<CurrentJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
