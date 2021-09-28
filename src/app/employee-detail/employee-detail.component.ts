import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AddDialogBoxComponent } from '../add-dialog-box/add-dialog-box.component';
import { EmployeeDetail } from '../Models/employee-detail';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  employeeList: EmployeeDetail[] = [
    {
      Id: 1,
      FirstName: 'Lavanya',
      LasttName: 'Shanmuga',
      Age: 36,
      Salary: 2000,
    },
    {
      Id: 2,
      FirstName: 'Shanmuga',
      LasttName: 'Sivagnanam',
      Age: 36,
      Salary: 5000,
    },
    {
      Id: 3,
      FirstName: 'Sanjay',
      LasttName: 'Shanmuga',
      Age: 36,
      Salary: 4000,
    },
    {
      Id: 4,
      FirstName: 'Sashwin',
      LasttName: 'Shanmuga',
      Age: 36,
      Salary: 4000,
    },
  ];
  addRowData: EmployeeDetail[] = [
    {
      Id: 5,
      FirstName: 'Sashwin',
      LasttName: 'Shanmuga',
      Age: 36,
      Salary: 4000,
    },
  ];
  showRow: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  add() {
    this.showRow = true;
    this.addRowData.push();
    console.log(this.addRowData);
  }
}
