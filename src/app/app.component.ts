import { Component } from '@angular/core';
import { MyFirstService } from './myFirstService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    error: any;
    numbers: number[];

    constructor(private myFirstService: MyFirstService) {}

    ngOnInit() {
      let $numbers = this.myFirstService.getNumbers();

      $numbers.subscribe( numbers => this.numbers = numbers);
    }
}
