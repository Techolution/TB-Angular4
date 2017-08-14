import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'employees',
  template: `
    <employee-list [employees]="employees" (employeeSelected)="selectedEmployee = $event;"></employee-list>
    <employee-detail [employee]="selectedEmployee"></employee-detail>
  `,
  styles: [`
    :host {
      display:flex;
    }
  `]
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  selectedEmployee: Employee;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(
      (employees) => { this.employees = employees; },
      (error) => { console.error(error.statusText); }
    );
  }

}
