import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from './../../services/users.service';

// Component decorator allows you to mark a class as an Angular component
// and provide additional metadata that determines how the component should be processed,
// instantiated and used at runtime.
@Component({
    selector: 'hg-edit-user',
    template: `
        <div>
         <h2>Edit user</h2>
         <form novalidate (ngSubmit)="updateUser()">
             <!-- [(ngModel)] - two way data binding, which allows us populate this field and read value later -->
            <input name="name" type="text" placeholder="name" [(ngModel)]="user.name">
            <button>Submit</button>  
         </form>
        </div>
    `
})
export class EditUserComponent implements OnInit {
    userId;
    user;
    constructor(private userService: UsersService,
                private activatedRoute: ActivatedRoute,
                private route: Router) { }

    ngOnInit() {
        // Subscribe to current route params and get one named 'id'
        this.activatedRoute.params.subscribe(
            (param) => {
                this.userId = param['id'];
                this.getUser();
            },
            error => console.error(error)
        );
    }

    // Call service to get individual user data by id
    getUser() {
        this.user = this.userService.getUser(this.userId).subscribe(
            (user) => user,
            error => console.error(error)
        );
    }

    // Call service to update edited user, then redirect to 'list' route
    updateUser() {
        this.userService.updateUser(this.user).subscribe(
            res => this.route.navigate(['list']),
            error => console.error(error)
        );
    }
}
