import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SupportComponent } from './support/support.component';
import { CourseComponent } from './course/course.component';
import { AuteurComponent } from './auteur/auteur.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import { NewAuteurComponent } from './new-auteur/new-auteur.component';
import { NewSupportComponent } from './new-support/new-support.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { EditAuteurComponent } from './edit-auteur/edit-auteur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SupportComponent,
    CourseComponent,
    AuteurComponent,
    NewAuteurComponent,
    NewSupportComponent,
    NewCourseComponent,
    EditAuteurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
