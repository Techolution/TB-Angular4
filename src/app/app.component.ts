import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Item[] = [
    { id: 1, label: "Food"},
    { id: 2, label: "Water"},
    { id: 3, label: "Shelter"},
    { id: 4, label: "Clothing"}
  ];

  selectedItem: Item;

  addItem(label: string): void {
    this.items.push({
      id: this.nextId(),
      label: label
    });
  }

  deleteItem(itemToDelete: Item): void {
    let idToDelete = itemToDelete.id;

    this.items = this.items.filter((item) => { 
      return item.id !== idToDelete
    });

    if ( this.selectedItem.id === idToDelete ){ this.selectedItem = null }
    
  }

  nextId(): number {
    let nextId = 1;

    this.items.forEach((item) => {
        if (item.id >= nextId) {
          nextId = item.id + 1;
        } 
    });

    return nextId;
  }

  onItemSelected(item): void {
    this.selectedItem = item;
  }

}
