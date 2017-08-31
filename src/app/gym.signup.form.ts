import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'gym-signup-form',
    templateUrl: './gym.signup.form.html'
})
export class GymSignupForm {

    signUpForm: FormGroup;

    states = ['AL', 'KS', 'KY', 'NY', 'NJ', 'TX'];

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.signUpForm = this.fb.group({
            address: this.fb.group({
                street: ['', Validators.required ],
                city: ['', Validators.required ],
                state: ['', Validators.required ],
                zip: ['', Validators.required ]
            }),
            email: ['', Validators.required ],
            optIn: [false, Validators.requiredTrue ],
            password: ['', Validators.required ],
            sex: ['', Validators.required ]
        });
    }

}