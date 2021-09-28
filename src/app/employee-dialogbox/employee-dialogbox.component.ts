import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { EmployeeDetail } from '../Models/employee-detail';
import { formkeys, NewEmployeeForm } from '../Models/formdeclaration';

@Component({
  selector: 'app-employee-dialogbox',
  templateUrl: './employee-dialogbox.component.html',
  styleUrls: ['./employee-dialogbox.component.scss'],
})
export class EmployeeDialogboxComponent implements OnInit {
  formKeys = formkeys;
  newEmployee: NewEmployeeForm;
  newEmployeeValue: EventEmitter<NewEmployeeForm> = new EventEmitter<NewEmployeeForm>();
  action: string;
  tabel_data: any;

  employeeForm: FormGroup = this.formbuilder.group({
    [this.formKeys.ID]: ['', Validators.required],
    [this.formKeys.FIRSTNAME]: ['', Validators.required],
    [this.formKeys.LASTNAME]: ['', Validators.required],
    [this.formKeys.AGE]: ['', Validators.required],
    [this.formKeys.SALARY]: ['', Validators.required],
  });
  constructor(
    private formbuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeDialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Data
  ) {
    this.tabel_data = { ...data };
    this.action = this.tabel_data.action;
  }

  ngOnInit(): void {}
  getEmployee() {
    this.newEmployee = this.employeeForm.getRawValue() as NewEmployeeForm;
    this.newEmployeeValue.emit(this.newEmployee);
    this.dialogRef.close({ event: this.action, data: this.newEmployee });
    console.log(this.newEmployee);
  }
  cancelDialog() {
    this.dialogRef.close({ event: 'cancel' });
  }
}
