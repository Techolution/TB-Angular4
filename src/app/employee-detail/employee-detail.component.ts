import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  @Input() employee: Employee;
  @Output() createRequest = new EventEmitter<Employee>();
  @Output() deleteRequest = new EventEmitter<Employee>();
  @Output() updateRequest = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {}

  reset() {
    this.employee = new Employee(null, '', false);
  }

}
