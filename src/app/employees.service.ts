import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Headers, Http } from '@angular/http';
import { Observable } from 'Rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

    private readonly EMPLOYEES_URL = 'http://localhost:3000/employees';

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    create(employee: Employee): Promise<Employee> {
        return this.http.post(`${this.EMPLOYEES_URL}/`, JSON.stringify(employee), { headers: this.headers })
                   .toPromise()
                   .then(res => res.json());
    }

    delete(id: number): Promise<Employee> {
        return this.http.delete(`${this.EMPLOYEES_URL}/${id}`, { headers: this.headers })
                   .toPromise()
                   .then(res => res.json());
    }

    getAll(): Promise<Employee[]> {
        return this.http.get(this.EMPLOYEES_URL)
                   .toPromise()
                   .then(res => res.json());
    }

    update(employee: Employee): Promise<any> {
        return this.http.put(`${this.EMPLOYEES_URL}/${employee.id}`, JSON.stringify(employee), { headers: this.headers })
                   .toPromise()
                   .then(res => res.json());
    }

}