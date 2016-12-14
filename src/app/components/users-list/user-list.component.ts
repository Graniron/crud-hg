import { Component, OnInit } from '@angular/core';
import 'rxjs';

import { UsersService } from './../../services/users.service';

// Component decorator allows you to mark a class as an Angular component
// and provide additional metadata that determines how the component should be processed,
// instantiated and used at runtime.
@Component({
    selector: 'hg-user-list',
    template: `
        <div>Users list</div>
        <ul>
            <!-- *ngFor - analog of ng-repeat(angular 1). Use for iterating over array -->
            <li *ngFor="let user of users" >
               <!-- [routerLink] - make link to route, {{}} - interpolation -->
               <a [routerLink]="['/edit', user.id]">{{user.name}}</a>  
                <!-- On click event invoke deleteUser method --> 
               <button class="btn btn-danger" (click)="deleteUser(user.id)">x</button>            
            </li>
        </ul>
        <button class="btn btn-primary" [routerLink]="['/add']">Add</button>  
    `,
})
export class UsersListComponent implements OnInit {
    users;
    // a default method of the class that is executed when the class is instantiated 
    // and ensures proper initialization of fields in the class and its subclasses.
    constructor(private userService: UsersService) { }

    // Lifecycle hook, which is called after initializing the component
    ngOnInit() {
        console.log($('.btn-primary'));
        this.getUsers();
    }

    // Call service to get users collection
    getUsers() {
        this.userService.getUsers().subscribe( // subscribe(read 'invoke') observable amd listen to it
            users => this.users = users,
            error => console.error('Error: ', error)
        );
    }

    // Call service to delete user from db
    deleteUser(id) {
        this.userService.deleteUser(id).subscribe( // subscribe(read 'invoke') observable amd listen to it
            res => this.getUsers(),
            error => console.error('Error: ', error)
        );
    }
}