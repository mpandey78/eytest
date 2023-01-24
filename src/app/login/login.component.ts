import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!:SocialUser
  constructor(private authService:SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user
    })
  }
  signwithgoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  logout(){
    this.authService.signOut()
  }
  signwithfb(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
  logoutfb(){
    this.authService.signOut()
  }

}
