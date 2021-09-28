import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDetail } from '../Models/employee-detail';

@Component({
  selector: 'app-add-dialog-box',
  templateUrl: './add-dialog-box.component.html',
  styleUrls: ['./add-dialog-box.component.scss'],
})
export class AddDialogBoxComponent implements OnInit {
  addRow: string;
  addData: any;
  constructor(
    public dialogRef: MatDialogRef<AddDialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: EmployeeDetail
  ) {
    this.addData = { ...data };
    this.addRow = this.addData.addRow;
  }

  ngOnInit(): void {}
}
