import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthResponse } from '../auth/auth-response';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private  authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup(emailStr: string, passwordStr: string){
    const userObject = {
      email : 'pmcarts',
      password : '1234'
    };

    this.authService.signup(userObject).subscribe((res: AuthResponse) => {
      console.log(res);
      //this.router.navigateByUrl('home'); 
    },
    (err) => {console.log(err); });
  }

}
