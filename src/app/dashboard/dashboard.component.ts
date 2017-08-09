import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    div {
      background-color: rgb(227, 252, 245);
      box-shadow: 1px 0px 4px 0px #333;
      margin: 0px 10px;
      padding:0px 20px;
    }
  `]
})
export class DashboardComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

  }

}
