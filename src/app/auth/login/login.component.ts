import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  user: user = new Object();
  error: any;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }
  Login() {
    this.router.navigateByUrl("/layout");
      }
    
}
