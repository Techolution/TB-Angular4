import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'employees',
  template: `
    <employee-list [employees]="employees" (employeeSelected)="onSelectedEmployee($event)"></employee-list>
    <employee-detail [employee]="selectedEmployee"
                     (createRequest)="createEmployee($event)"
                     (deleteRequest)="deleteEmployee($event)"
                     (updateRequest)="updateEmployee($event)">
    </employee-detail>
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
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeesService.getAll().then(
      (employees) => { 
        this.employees = employees;
      }
    );
  }

  onSelectedEmployee(employee) {
    /* make a copy so that when users edit the form it won't affect the original until it is updated. */
    this.selectedEmployee = Object.assign({}, employee);
  }

  createEmployee(employee) {
    this.employeesService.create(employee).then(
      (res) => {
        employee.id = res.id
        this.employees.push(employee); 
      }
    );
  }

  deleteEmployee(id: number) {
    this.employeesService.delete(id).then(
      (res) => {
        this.employees = this.employees.filter( e => e.id !== id ); 
        this.selectedEmployee = null;
      }
    );
  }

  updateEmployee(employee: Employee) {
    this.employeesService.update(employee).then(
      (res) => { this.loadEmployees(); }
    );
  }

}
