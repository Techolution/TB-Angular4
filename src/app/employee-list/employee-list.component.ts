import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Employee} from '../employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployee: Employee;

  @Input() employees: Employee[];
  @Output() employeeSelected = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {

  }

  select(employee: Employee) {
    this.selectedEmployee = employee;
    this.employeeSelected.emit(employee);
  }

}
