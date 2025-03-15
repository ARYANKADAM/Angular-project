import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // myForm = new FormGroup({
  // //   name: new FormControl('', [Validators.required, Validators.minLength(6)]),
  // //   email: new FormControl('', [Validators.required, Validators.email]),
  // //   password: new FormControl('', [
  // //     Validators.required,
  // //     Validators.minLength(6),
  // //   ]),
  // // });
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitLogin() {
    if (this.myForm.valid) {
      console.log('Login Data:', this.myForm.value);
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Form is invalid!');
    }
  }
}
