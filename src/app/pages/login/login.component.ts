import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/login-request';
import { ToastService } from '../../service/toast/toast.service';
import { AuthService } from './../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm?: FormGroup
  isLoginPage = true;

  constructor(
    private toastService: ToastService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [{ value: null, disabled: false }, [Validators.required, Validators.email]],
      password: [{ value: null, disabled: false }, Validators.required],
    });
  }

  login(): void{
    if(this.loginForm!.valid){
      const credentials = Object.assign({}, this.loginForm!.getRawValue() as LoginRequest);
      this.authService.login(credentials).subscribe({
        next: () => {
            this.router.navigate(['/home']);
        },
        error: () => {
            this.toastService.error('login.messages.loginError');
      }});
    }
  }

  changePage(): void{
    this.isLoginPage = !this.isLoginPage
  }

}
