import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { UsersService } from './../../services/users.service';

@Component({
    selector: 'hg-edit-user',
    template: `
        <div>
         <h2>Edit user</h2>
         <form novalidate (ngSubmit)="updateUser()">
            <input name="name" type="text" placeholder="name" [(ngModel)]="user.name">
            <button>Submit</button>  
         </form>
        </div>
    `
})
export class EditUserComponent implements OnInit {
    userId;
    user;
    constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private route: Router) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (param) => {
                this.userId = param['id'];
               this.getUser();
            },
            error => console.error(error)
        )
    }

    getUser() {
         this.user = this.userService.getUser(this.userId).subscribe(
                    (user) => this.user = user,
                    error => console.error(error)
                )
    }

    updateUser() {
        this.userService.updateUser(this.user).subscribe(
            res => this.route.navigate(['list']),
            error => console.error(error)
        )
    }
    
}