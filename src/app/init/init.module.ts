import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [HomeComponent, NotFoundComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InitModule { }
