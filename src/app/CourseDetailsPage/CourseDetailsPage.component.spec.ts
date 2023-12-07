
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsPage } from './CourseDetailsPage.component';

describe('CourseDetailsPage', () => {
  let component: CourseDetailsPage;
  let fixture: ComponentFixture<CourseDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
