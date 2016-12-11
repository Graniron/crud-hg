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
  declarations: [
    AppComponent, UsersListComponent, AddUserComponent, EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
