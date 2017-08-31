import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string =  'Reactive Forms!';

  selectedUser: User;

  users: User[] = [
    {
      id: 1,
      name: 'Robert',
      nickName: 'Bob',
      optIn: true,
      sex: 'male',
      team: 'blue'
    },
    {
      id: 2,
      name: 'Cindy',
      nickName: 'C',
      optIn: true,
      sex: 'female',
      team: 'red'
    },
    {
      id: 3,
      name: 'Alexei',
      nickName: 'Aloysha',
      optIn: true,
      sex: 'male',
      team: 'green'
    }
  ];


}
