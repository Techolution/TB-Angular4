import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    :host {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    h3, employee-list {
      flex: 1 1 auto;
    }
  `]
})
export class DashboardComponent implements OnInit {
  
  employees: Employee[];

  selectedEmployee: Employee;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getAll().then(
      (employees) => { this.employees = employees; },
      (error) => { console.error(error.statusText); }
    );
  }

  onSelectedEmployee(employee:Employee) {
    this.selectedEmployee = employee;
  }

}
