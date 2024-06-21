import {Component, ViewChild} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {isEmpty} from "rxjs";
import {AuthLayoutComponent} from "../auth-layout/auth-layout.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    AuthLayoutComponent,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("loginForm") loginForm!: NgForm

  email = '';
  password = '';
  role = '';

  emailError = "";
  passwordError = "";
  roleError = '';

  constructor( private router: Router) {}

  onEmailChange(event:any){
    this.email = event.target.value;
    if (this.email.trim() == ''){
      this.emailError = "This is a Required field";
    }else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.email)){
        this.emailError = "please enter a valid email";
      }else {
        this.emailError = "";
      }
    }
  }

  onPasswordChange(event: any) {
    this.password = event.target.value;
    // if (this.password.trim() == '') {
    //   this.passwordError = "Password is required field"
    // } else {
    //   this.passwordError = '';
    // }

    this.passwordError = this.password.trim() === '' ? "Password is required field" :'';
  }

  onRoleChange(event:any){
    this.role = event.target.value;
    if (this.role.trim() == null){
      this.roleError = 'You must select your role';
    }else {
      this.passwordError = '';
    }
  }

  login() {

  }
}
