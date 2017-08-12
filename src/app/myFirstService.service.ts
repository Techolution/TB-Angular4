import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'Rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MyFirstService {

    readonly NUMBERS_URL: string = 'http://localhost:3000/numbers';

    constructor(private http: Http) {}

    getNumbers(): Observable<number[]> {
        return this.http.get(this.NUMBERS_URL).map( res => res.json() );
    }

    handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    } 
}