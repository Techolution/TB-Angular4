import { Component } from '@angular/core';
import { Color } from './color.model';

@Component({
    selector: 'color-list',
    template: `
        <h3>{{title}}</h3>
        <div *ngFor="let color of colors" (click)="showId(color.id)">
            {{color.label}}<span *ngIf="color.favorite">Favorite!</span>
        </div>
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
                favorite: false,
                label: 'blue'
            },
            {
                id: 2,
                favorite: true,
                label: 'red'
            },
            {
                id: 3,
                favorite: false,
                label: 'green'
            },
            {
                id: 4,
                favorite: false,
                label: 'yellow'
            }
        ];
    }

    showId(id: number): void {
        alert(id);
    }
}