import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES } from './app.router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersService } from './services/users.service';

@NgModule({
  // Declare components
  declarations: [
    AppComponent, UsersListComponent, AddUserComponent, EditUserComponent
  ],
  // Declare modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  // Declare services
  providers: [UsersService],
  // Specify which component must run first
  bootstrap: [AppComponent]
})
export class AppModule { }
