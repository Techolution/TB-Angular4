import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Http } from '@angular/http';
import { Observable } from 'Rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

    private readonly END_POINT_HOST = 'http://localhost:3000/';
    private readonly EMPLOYEES = 'employees';

    constructor(private http: Http) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get(this.END_POINT_HOST + this.EMPLOYEES).map( res => res.json() );
    }

}