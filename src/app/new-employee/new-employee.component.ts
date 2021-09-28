import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import { EmployeeDialogboxComponent } from '../employee-dialogbox/employee-dialogbox.component';
import { EmployeeDataService } from '../employee-service.service';
import { EmployeeDetail } from '../Models/employee-detail';
import { NewEmployeeForm } from '../Models/formdeclaration';

const Employee_List: EmployeeDetail[] = [
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
    Age: 12,
    Salary: 4000,
  },
  {
    Id: 4,
    FirstName: 'Sashwin',
    LasttName: 'Shanmuga',
    Age: 10,
    Salary: 4000,
  },
];

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss'],
})
export class NewEmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'age',
    'salary',
    'action',
  ];
  dataSource: EmployeeDetail[] = [];
  addNewEmployee: EmployeeDetail;
  addRowDialog: MatDialogRef<EmployeeDialogboxComponent>;
  constructor(
    private dialog: MatDialog,
    private employeeservice: EmployeeDataService
  ) {
    const savedEmployees = this.employeeservice.getEmployees();
    if (savedEmployees.length > 0) {
      this.dataSource = savedEmployees;
    } else {
      this.dataSource = Employee_List;
      this.saveToLocalStorage();
    }
  }

  ngOnInit(): void {}

  saveToLocalStorage() {
    this.employeeservice.save(this.dataSource);
  }
  openAddDialog(action, obj) {
    obj.action = action;
    this.addRowDialog = this.dialog.open(EmployeeDialogboxComponent, {
      hasBackdrop: false,
      data: obj,
    });
    this.addRowDialog.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addNewRow(result.data);
      } else if (result.event == 'Edit') {
        this.editedRow(result.data);
      }

      this.saveToLocalStorage();
    });
  }
  addNewRow(result) {
    const newDataSource = [...this.dataSource];
    newDataSource.push(result);
    this.dataSource = newDataSource;
    console.log(this.dataSource);
  }
  editedRow(result) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.Id == result.Id) {
        value.FirstName = result.FirstName;
        value.LasttName = result.LastName;
        value.Age = result.Age;
        value.Salary = result.Salary;
      }
      return true;
    });
    console.log(this.dataSource);
  }

  deletedRow(id: number) {
    const deleteDataSource = [...this.dataSource];
    deleteDataSource.splice(id, 1);
    this.dataSource = deleteDataSource;

    this.saveToLocalStorage();
  }
}
