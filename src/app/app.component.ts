import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly defaultStyles: any = { backgroundColor: 'pink', border: '1px solid black', padding: '2px' };
  readonly hoverStyles: any = { backgroundColor: 'yellow', border: '5px solid green', padding: '20px' };

  title: string =  'Attribute Directives!';

  styles: any = {};

  constructor() {
    this.styles = this.defaultStyles;
  }

  onMouseEnter() {
    this.styles = this.hoverStyles;
  }

  onMouseLeave() {
    this.styles = this.defaultStyles;
  }
}
