import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // You can add authentication logic here, e.g., send a request to a backend service.
    // For simplicity, we'll just log the username and password for now.
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
