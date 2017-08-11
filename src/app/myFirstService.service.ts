import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MyFirstService {

    readonly NUMBERS_URL: string = '/src/data.json';

    numbers: number[] = [];

    constructor(private http: Http) {}

    getNumbers(): Promise<number[]> {
        return this.http.get(this.NUMBERS_URL)
                .toPromise()
                .then(response => response.json().numbers);
    }
}