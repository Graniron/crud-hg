import { Routes } from '@angular/router';

import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/user-list.component';

// Define root routes for App
export const ROUTES: Routes = [
    { path: 'list', component: UsersListComponent},
    { path: 'add', component: AddUserComponent},
    { path: 'edit/:id', component: EditUserComponent},
    { path: '**', redirectTo: 'list'}
];
