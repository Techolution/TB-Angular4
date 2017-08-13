import { Component, OnInit } from '@angular/core';
import { Item } from './item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string =  'Component Unit Test!';

  items: Item[];

  ngOnInit() {
    this.items = [
      {
        id: 1,
        label: 'Item 1'
      },
      {
        id: 2,
        label: 'Item 2'
      },
    ];
  }

  delete(itemToDelete: Item) {
    this.items = this.items.filter(  item => item.id !== itemToDelete.id );
  }
  
}
