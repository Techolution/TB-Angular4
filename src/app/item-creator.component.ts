import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'item-creator',
    template: `
        <input [(ngModel)]="value">
        <button (click)="handleClick()">Create Item</button>
    `
})
export class ItemCreatorComponent {

    @Output() createRequest = new EventEmitter<string>();
    
    value: string;

    constructor() {
        this.value = '';
    }

    handleClick() {
        this.createRequest.emit(this.value);
        this.value = '';
    }

}