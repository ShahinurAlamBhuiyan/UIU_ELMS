// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginPageComponent } from './login-page/login-page.component';
// import { AllCoursePage } from './first-page/first-page.component';
// import { EventPage } from './second-page/second-page.component';
// import { CreateEventPage } from './third-page/third-page.component';
// import { CourseDetailsPage } from './fourth-page/fourth-page.component';
// import { AddMaterialPage } from './fifth-page/fifth-page.component';
// import { Routes } from '@angular/router';


// const routes: Routes = [
//   { path: '', component: AllCoursePage },
//   { path: 'login', component: LoginPageComponent },
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginPageComponent,
//     AllCoursePage,
//     EventPage,
//     CreateEventPage,
//     CourseDetailsPage,
//     AddMaterialPage
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Updated import
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AllCoursePage } from './AllCoursePage/AllCoursePage.component'; 
import { CreateEventPage } from './CreateEventPage/CreateEventPage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CreateEventPage,
    // Import other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

