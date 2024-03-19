import { Component } from '@angular/core';
import { RegisterForm } from '../models/register-form';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  form: RegisterForm = new RegisterForm();

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  onSubmit() {
    console.log(this.form)

    const { username, email, password } = this.form;

    this.authService.retister(username, email, password).subscribe(
      {
        next: (data) => {
          console.log(data)
        },
        error: (error) => {
          this.dialog.open(ErrorDialogComponent, { data: { message: error.message } })
        }
      }
    )
  }
}
