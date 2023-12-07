import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursePage } from './AllCoursePage.component';

describe('AllCoursePage', () => {
  let component: AllCoursePage;
  let fixture: ComponentFixture<AllCoursePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCoursePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
