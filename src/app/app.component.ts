import { Component } from '@angular/core';
import { MyFirstService } from './myFirstService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    numbers: number[];

    constructor(private myFirstService: MyFirstService) {

    }

    ngOnInit() {
      this.numbers = this.myFirstService.getNumbers();
    }
}
