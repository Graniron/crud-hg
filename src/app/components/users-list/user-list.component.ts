import { Component, OnInit } from '@angular/core';
import 'rxjs';

import { UsersService } from './../../services/users.service';

@Component({
    selector: 'hg-user-list',
    template: `
        <div>Users list</div>
        <ul>
            <li *ngFor="let user of users">
                {{user.name}}              
            </li>
        </ul>
    `,
})
export class UsersListComponent implements OnInit {
    users;
    constructor(private userService: UsersService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error => console.error('Error: ', error)
        )
    }
}