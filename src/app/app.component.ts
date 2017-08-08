import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: [
    {
      id: 1,
      label: 'blue'
    },
    {
      id: 2,
      label: 'red'
    },
    {
      id: 3,
      label: 'green'
    },
    {
      id: 4,
      label: 'yellow'
    }
  ]
}
