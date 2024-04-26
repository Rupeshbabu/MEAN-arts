import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  userInfo:any;
  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    const userData = this.userService.getUserFromToken();
    if(!userData) {
      this.router.navigate(['/signin']);
    }
    this.userInfo = userData.user; 
  }
}
