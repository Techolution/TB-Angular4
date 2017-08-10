import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class MyFirstService {

    readonly NUMBERS_URL: string = 'data.json';

    numbers: number[] = [];

    constructor(private http: Http) {}

    getNumbers(): Promise<number[]> {
        return this.http.get(this.NUMBERS_URL)
                .toPromise()
                .then(response => response.json().numbers);
    }
}