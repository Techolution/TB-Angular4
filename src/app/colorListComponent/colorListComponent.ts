import { Component } from '@angular/core';
import { Color } from './color.model';

@Component({
    selector: 'color-list',
    template: `
        <h3>{{title}}</h3>
        <div *ngFor="let color of colors">{{color.label}}</div>
    `
})
export class ColorListComponent {
    colors: Color[];
    title: string = 'Favorite Colors';
    constructor() {
        this.colors = [
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
        ];
    }
}