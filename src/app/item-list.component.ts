import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './item.model';

@Component({
    selector: 'item-list',
    template: `
        <div *ngFor="let item of items; trackBy: trackById"
             (click)="select(item)"
             [class.selected]="item === selected">
            <span>{{item.label}}</span>
            <span><button (click)="deleteRequest.emit(item)">x</button></span>
        </div>
    `,
    styles: [`
        .selected {
            background-color:yellow;
        }
    `]
})
export class ItemListComponent {

    @Input() items: Item[];

    @Output() deleteRequest = new EventEmitter<Item>();
    @Output() itemSelected = new EventEmitter<Item>();

    selected: Item;

    constructor() {}

    select(item: Item) {
        this.selected = item;
        this.itemSelected.emit(this.selected);
    }
}