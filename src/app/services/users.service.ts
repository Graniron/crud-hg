import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
const API_ENDPOINT = 'http://localhost:3000/users';

// @Injectable() lets Angular 2 know that a class can be used with the dependency injector.
// It is not strictly required if the class has other Angular 2 decorators on it
// or does not have any dependencies.
@Injectable()
export class UsersService {

    constructor(private http: Http) {}

    // Get users list data from the server
    getUsers() {
        return this.http.get(API_ENDPOINT)
        // map works exactly the same for Observables as it does for arrays. 
        // You use map to transform a collection of items into a collection of different items.
         .map((res: Response) => res.json());
    }

    // Get individual user from the server
    getUser(id) {
        return this.http.get(`${API_ENDPOINT}/${id}`)
         .map((res: Response) => res.json());
    }

    // Make request to create user
    createUser(name) {
       return this.http.post(`${API_ENDPOINT}`, {name})
         .map((res: Response) => res.json());
    }

    // make request to update user data
    updateUser(user) {
        return this.http.put(`${API_ENDPOINT}/${user.id}`, user)
         .map((res: Response) => res.json());
    }

    // Delete user by id
    deleteUser(id) {
        return this.http.delete(`${API_ENDPOINT}/${id}`)
    }
}