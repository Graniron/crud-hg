import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
const API_ENDPOINT = 'http://localhost:3000/users';

@Injectable()
export class UsersService {

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get(API_ENDPOINT)
         .map((res: Response) => res.json());
    }
}