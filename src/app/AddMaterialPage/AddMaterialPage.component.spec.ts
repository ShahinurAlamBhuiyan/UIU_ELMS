import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialPage } from './AddMaterialPage.component';

describe('AddMaterialPage', () => {
  let component: AddMaterialPage;
  let fixture: ComponentFixture<AddMaterialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaterialPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
