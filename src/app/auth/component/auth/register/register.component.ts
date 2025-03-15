import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // registrationForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   phone: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[0-9]{10}$'),
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  //   confirmPassword: new FormControl('', [Validators.required]),
  // });
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  submitRegistration() {
    if (this.registrationForm.valid) {
      console.log('Registration Successful:', this.registrationForm.value);
      this.router.navigate(['/auth/login']);
    } 
    else{
      console.log('REgistration is invalid:', this.registrationForm.errors);
      this.printErrors();
    }
  }
  printErrors() { 
    const controls = this.registrationForm.controls; 
    // am I accessing / trying to get controlelrs array 
    for (const controllerName in controls) { 
    const control = controls[controllerName]; 
    if (control.invalid && control.touched) { 
    const errors = control.errors; 
    if (errors) { 
    console.log(`${controllerName} has the following errors:`); 
    for (const error in errors) { 
    console.log(`- ${error}: ${JSON.stringify(errors[error])}`); 
    } 
    } 
    } 
    } 
    }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}
