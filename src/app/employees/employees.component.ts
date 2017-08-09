import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';

@Component({
  selector: 'employees',
  template: `
    <employee-list></employee-list>
    <employee-detail></employee-detail>
  `,
  styles: [`
    :host {
      display:flex;
    }
  `]
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
