import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from './../../services/users.service';

@Component({
    selector: 'hg-user-form',
    template: `
        <div>
        <h2>Add user</h2>
        <form novalidate (ngSubmit)="createUser(name)">
            <input name="name" type="text" placeholder="name" #name>
            <button>Submit</button>  
         </form>
        </div>
    `
})
export class AddUserComponent {
    constructor(private usersService: UsersService, private route: Router) {}

    createUser(name) {        
        this.usersService.createUser(name.value).subscribe(
            res => this.route.navigate(['list']),
            error => console.error(error)
        )
    }
}