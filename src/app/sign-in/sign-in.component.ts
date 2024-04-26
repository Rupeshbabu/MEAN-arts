import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.userService.signIn(this.loginForm.value).subscribe((res: any) => {
      try {
        if (res) {
          // Assume you receive the token from the server after login
          const token = res.token;
          // Store the token in a localStorage
          this.userService.setToken(token);
          this.userService.setUserData(res.data.user);
          this.router.navigate(['/home']);
        }
      } catch (error) {
        throw error;
      }
    });
  }
}
