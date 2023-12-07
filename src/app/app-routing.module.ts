// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCoursePage } from './AllCoursePage/AllCoursePage.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { EventPage } from './EventPage/EventPage.component';
import { CreateEventPage } from './CreateEventPage/CreateEventPage.component';
import { AddMaterialPage } from './AddMaterialPage/AddMaterialPage.component';
import { CourseDetailsPage } from './CourseDetailsPage/CourseDetailsPage.component';

const routes: Routes = [
  { path: 'add-material', component: AddMaterialPage }, // add event
  { path: 'course-details', component: CourseDetailsPage }, // course details
  { path: 'event', component: EventPage }, // UIU event
  { path: '', component: AllCoursePage }, // all course
  { path: 'create-event', component: CreateEventPage }, // create event
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
