import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as shajs from 'sha.js';
import { SignInInfo } from '../challenge/challenge.interface';

export interface User {
  username: string;
  hashPassword: string;
  salt: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit{
  public usernameField!: string;
  public passwordField!: string;
  public hidePasswordField: boolean = true;

  private challengeParams: Params = { page: 'da88ee3dd8a1'};

  private user: User = {
    username: '775307033826',
    hashPassword: 'dcd97882e46dae0d210eb77be7f6492ec65d22066e23752feb106dfe5b249191',
    salt: '3de2292e-3109-4df9-ba6c-0b3fba887dbd',
  };

  constructor(
    private _snackBar: MatSnackBar,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    const info: SignInInfo = JSON.parse(this.cookieService.get('signInInfo'));
    if (info.loggedIn && new Date(info.expires) > new Date()) {
      this.navigateToChallenge();
    } else {
      this.cookieService.delete('signInInfo');
    }
  }

  navigateToChallenge() {
    this.router.navigate([], {
      queryParams: this.challengeParams,
      relativeTo:this.activatedRoute,
    })
  }

  sendSnack(message: string) {
    this._snackBar.open(message, undefined, { duration: 5000 });
  }

  unameHint() {
    alert("This is a number that really gets watched,\nso we can always know if the system got botched.\n\nWe use it to aid in our short term survival,\nas we wait for it's much anticipated arrival.");
  }

  passHint() {
    alert("This bit of text is hidden in plain sight,\nBut something is wrong and you can't see it right.\n\nThis text is not like the rest all crisp and opaque,\nBut you could try to highlight it to catch a little break.");
  }

  login() {
    if (this.usernameField === this.user.username && new shajs.sha256().update(this.user.salt + '-' + this.passwordField).digest('hex') === this.user.hashPassword) {
      const payload: SignInInfo = {
        loggedIn: true,
        expires: new Date(new Date().getTime() + 60*60*24*1000)
      }
      const cookie = JSON.stringify(payload);
      this.cookieService.set('signInInfo', cookie);
      console.log(this.cookieService.get('signInInfo'));
      this.navigateToChallenge();
      return;
    }

    this.sendSnack('Login Error: Incorrect Username or Password')
  }

}


// Hashing test code
// const exibit: string = new shajs.sha256().update('testplaceholder').digest('hex');
//     if (this.user.hashPassword === exibit) {
//       console.log('its a win');
//     }
