import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm?: FormGroup
  isLoginPage = true;

  constructor(
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
      this.authService.login(credentials).subscribe(
        success => {
          if(success){
            this.router.navigate(['/home']);
          }
        });
    }
  }

  changePage(): void{
    this.isLoginPage = !this.isLoginPage
    console.log(this.isLoginPage);
  }

}
