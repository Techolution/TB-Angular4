import { Component } from '@angular/core';

@Component({
    selector: 'today-date',
    template: `
        <div>Today is: {{today | date: 'fullDate'}}</div>
    `,
    styles: [`
        div {
            background-color: grey;
            border: 1px solid black;
            color: white;
            padding:2px;
        }
    `]
})
export class TodayDateComponent {
    today: Date;

    constructor() {
        this.today = new Date();
    }
}