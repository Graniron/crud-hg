import { Routes } from '@angular/router';

import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/user-list.component';

export const ROUTES: Routes = [    
    { path: 'list', component: UsersListComponent},    
    { path: 'add', component: AddUserComponent},
    { path: 'edit', component: EditUserComponent},
    { path: '**', redirectTo: 'list'}
] 