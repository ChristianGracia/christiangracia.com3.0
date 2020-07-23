import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDownArrowComponent } from './animated-down-arrow.component';

describe('AnimatedDownArrowComponent', () => {
  let component: AnimatedDownArrowComponent;
  let fixture: ComponentFixture<AnimatedDownArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedDownArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedDownArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
