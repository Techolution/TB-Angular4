import { Component } from '@angular/core';
import { Color } from './color.model';

@Component({
    selector: 'color-list',
    templateUrl: './color-list.component.html',
    styleUrls: ['./color-list.component.css']
    //styleUrls: ['../app.component.css']
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