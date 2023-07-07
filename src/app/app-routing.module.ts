import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuteurComponent} from "./auteur/auteur.component";
import {CourseComponent} from "./course/course.component";
import {SupportComponent} from "./support/support.component";
import {NewAuteurComponent} from "./new-auteur/new-auteur.component";
import {NewSupportComponent} from "./new-support/new-support.component";
import {NewCourseComponent} from "./new-course/new-course.component";
import {EditAuteurComponent} from "./edit-auteur/edit-auteur.component";

const routes: Routes = [
  {path : "auteur", component : AuteurComponent},
  {path : "course", component : CourseComponent},
  {path : "support", component : SupportComponent},
  {path : "new-auteur", component : NewAuteurComponent},
  {path : "new-support", component : NewSupportComponent},
  {path : "new-course", component : NewCourseComponent},
  {path : "edit-auteur/:id", component : EditAuteurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
