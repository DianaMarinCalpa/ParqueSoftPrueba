import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatIconModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Perform authentication logic here
    // For demonstration purposes, we'll assume a successful login
    this.router.navigate(['/dashboard']);
  }
}
