import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';




const routes:Routes=[
{
  path:"user",
  component:UsersComponent
}



]

@NgModule({
  declarations: [  UsersComponent],
  imports: [
    CommonModule
  ]
})
export class ThemesModule { }
