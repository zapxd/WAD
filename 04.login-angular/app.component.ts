import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';
  successMsg: string = '';
  errorMsg: string = '';
  loggedInUser: any = null;

  users = [
    { name: 'Alice Johnson', email: 'alice@example.com', password: 'alice123' },
    { name: 'Bob Smith', email: 'bob@example.com', password: 'bobpass' },
    { name: 'Charlie Brown', email: 'charlie@example.com', password: 'charlie456' }
  ];

  onSubmit(form: NgForm) {
    this.successMsg = '';
    this.errorMsg = '';
    this.loggedInUser = null;

    if (form.invalid) {
      return;
    }

    const foundUser = this.users.find(
      u => u.email === this.email && u.password === this.password
    );

    if (foundUser) {
      this.loggedInUser = foundUser;
      this.successMsg = 'Login successful!';
      console.log('Logged in user:', foundUser);
      form.resetForm();
    } else {
      this.errorMsg = 'Invalid email or password';
    }
  }
}
