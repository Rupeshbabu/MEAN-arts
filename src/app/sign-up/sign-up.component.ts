import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  userSignup:any;
  agevalidate:Boolean = false;
  signUpForm !: FormGroup;


  constructor (private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  // ! we need implement some validations
    // TODO : 
    // 1) DOB is min 18, 
    // 2) userName is min 6,
    // 3) password match,
    // 4) Email check if exist or not
    // 5) mobile number is min and max length 10 
    // 6) display success pop-up
    

  onSignupSubmit() {
    this.userService.signUp(this.signUpForm.value).subscribe((res:any) =>{
      try {
        if(res.message === 'success'){
          alert('Success');
          this.router.navigate(['/signin']);
        }
      } catch (error) {
        throw error;
      }
    });
  }


}
