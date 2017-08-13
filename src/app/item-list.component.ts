import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleService } from './title.service';

export interface Item {
    id: number;
    label: string;
}

@Component({
    selector: 'item-list',
    template: `
        <h1>{{title}}</h1>
        <div class="item" *ngFor="let item of items">
            <span>{{item.label}}</span>
            <button class="deleteBtn" (click)="deleteRequest.emit(item)">x</button>
        </div>
        <div></div>
    `
})
export class ItemListComponent {
    @Input() items: Item[];
    @Output() deleteRequest = new EventEmitter<Item>();
    title: string;

    constructor(private titleService:TitleService) {
        this.title = titleService.getTitle();
    }
}