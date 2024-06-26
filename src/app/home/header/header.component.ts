import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  user:any;
  @Input() userData: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userData;
  }

  signout() {
    this.userService.removeToken();
    this.router.navigate(['/signin']);
  }
}
