import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPage } from './CreateEventPage.component';

describe('CreateEventPage', () => {
  let component: CreateEventPage;
  let fixture: ComponentFixture<CreateEventPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
