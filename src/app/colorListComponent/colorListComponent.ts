import { Component } from '@angular/core';
import { Color } from './color.model';

@Component({
    selector: 'color-list',
    template: `
        <h3>{{title}}</h3>
        <div *ngFor="let color of colors" (click)="showId(color.id)">{{color.label}}</div>
    `,
    styles: [`
        div {
            background-color:gray;
            border: 5px 10px;
            color:#fff;
            margin:1px;
            padding:10px;
        }
    `]
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

    showId(id: number): void {
        alert(id);
    }
}