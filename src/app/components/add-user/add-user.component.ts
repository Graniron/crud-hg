import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from './../../services/users.service';

// Component decorator allows you to mark a class as an Angular component
// and provide additional metadata that determines how the component should be processed,
// instantiated and used at runtime.
@Component({
    selector: 'hg-user-form',
    template: `
        <div>
        <h2>Add user</h2>
        <!-- Use (ngSubmit) as event for form submition -->
        <form novalidate (ngSubmit)="createUser(name)">
            <!-- #name - local reference which point to DOM element -->
            <input name="name" type="text" placeholder="name" #name>
            <button>Submit</button>  
         </form>
        </div>
    `
})
export class AddUserComponent {
    constructor(private usersService: UsersService, private route: Router) {}

    // Call service to create new user
    createUser(name) {
        this.usersService.createUser(name.value).subscribe( // subscribe(read 'invoke') observable amd listen to it
            res => this.route.navigate(['list']),
            error => console.error(error)
        );
    }
}