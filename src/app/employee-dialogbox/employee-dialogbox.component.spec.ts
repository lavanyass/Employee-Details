import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDialogboxComponent } from './employee-dialogbox.component';

describe('EmployeeDialogboxComponent', () => {
  let component: EmployeeDialogboxComponent;
  let fixture: ComponentFixture<EmployeeDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
