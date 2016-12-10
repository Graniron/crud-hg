import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersListComponent } from './components/users-list/user-list.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [    
    { path: 'list', component: UsersListComponent},    
    { path: 'add', component: UserFormComponent},
    { path: '**', redirectTo: 'list'}
] 