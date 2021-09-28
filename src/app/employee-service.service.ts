import { Injectable } from '@angular/core';
import { EmployeeDetail } from './Models/employee-detail';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  constructor() {}

  save(employess: EmployeeDetail[]) {
    localStorage.setItem('employee', JSON.stringify(employess));
  }

  getEmployees(): EmployeeDetail[] {
    const emps = localStorage.getItem('employee');

    if (emps) {
      return JSON.parse(localStorage.getItem('employee'));
    }

    return [];
  }
}
