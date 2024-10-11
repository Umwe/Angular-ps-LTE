import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // You can add authentication logic here
    if (this.email === 'admin@example.com' && this.password === 'password') {
      this.router.navigate(['/dashboard']);  // Navigate to the dashboard or any other page after login
    } else {
      alert('Invalid credentials!');
    }
  }
}
