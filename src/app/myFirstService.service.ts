import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MyFirstService {

    readonly NUMBERS_URL: string = 'http://localhost:3000/numbers';

    numbers: number[] = [];

    constructor(private http: Http) {}

    getNumbers(): Promise<number[]> {
        return this.http.get(this.NUMBERS_URL)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    } 
}