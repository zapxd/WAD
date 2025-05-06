import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  successMessage: string = '';
  users: any[] = []; // In-memory user array

  onSubmit(regForm: any) {
    // Basic validations
    if (this.user.name.length < 3) {
      alert('Name too short');
      return;
    }

    if (!this.user.email.includes('@') || !this.user.email.includes('.')) {
      alert('Invalid email');
      return;
    }

    if (this.user.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Add user to in-memory array
    this.users.push({ ...this.user });

    // Show success message
    this.successMessage = `Welcome ${this.user.name}! Registration complete.`;

    // Reset form and model
    regForm.resetForm();
    this.user = { name: '', email: '', password: '' };

    // Display the current user array in console
    console.log('Registered Users (in-memory):', this.users);
  }
}
