import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoPageComponent } from './main-info-page.component';

describe('MainInfoPageComponent', () => {
  let component: MainInfoPageComponent;
  let fixture: ComponentFixture<MainInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
