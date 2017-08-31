import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from './user';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'user-detail',
    templateUrl: './userDetail.component.html',
    styleUrls: ['userDetail.component.css']
})
export class UserDetailComponent implements OnChanges {
    @Input() user: User;
    @Output() updateRequest = new EventEmitter<any>();

    userForm: FormGroup;

    sexes: string[] = ['male', 'female'];

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.userForm = this.fb.group({
            name: '',
            nickName: ['', Validators.required  ],
            optIn: [false, Validators.requiredTrue],
            sex: [null, Validators.required]
        });
    }

    ngOnChanges() {
        console.log('changes detected');
        this.syncModelToForm();
    }

    syncModelToForm() {
        if (this.user) {
            this.userForm.reset({
                name: this.user.name,
                nickName: this.user.nickName,
                optIn: this.user.optIn,
                sex: this.user.sex
            });
        }
    }

    revert() {
        this.syncModelToForm();
    }

    update() {
        let formModel = this.userForm.value;
        /* here we are updating the data model but only in our submit handler.  The form itself never updates or touches
           the data model.  You might just send your update to a service and update your data model on a parent level
           in the application and not even update here either, if you want.  There are many options and it all depends
           upon the needs of your application.
        */
        this.user.nickName = formModel.nickName;
        this.user.optIn = formModel.optIn;
        this.user.sex = formModel.sex;
        this.ngOnChanges();

    }

}