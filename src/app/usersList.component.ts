import { User } from './user';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'users-list',
    template: `
        <div *ngFor="let user of users" 
             [class.selected]="user === selectedUser"
             (click)="select(user)">{{user.name}}</div>
    `,
    styles: [`
        .selected {
            background-color: yellow;
        }
    `]
})
export class UsersListComponent {
    @Input() users: User[];

    @Output() selectUser = new EventEmitter<User>();

    selectedUser: User;

    select(user: User) {
        this.selectedUser = user;
        this.selectUser.emit(user);
    }

}