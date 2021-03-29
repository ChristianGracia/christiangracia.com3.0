import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeroImageComponent } from './about-hero-image.component';

describe('AboutHeroImageComponent', () => {
  let component: AboutHeroImageComponent;
  let fixture: ComponentFixture<AboutHeroImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutHeroImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHeroImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
