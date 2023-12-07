// login-page.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private router: Router) {}

  redirectToHome() {
    // Navigate to the home page or any other route you desire
    this.router.navigate(['/']);
  }

  // Other login-related functions can go here
}
