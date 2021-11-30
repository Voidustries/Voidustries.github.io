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
  styleUrls: ['./login.component.sass'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public usernameField!: string;
  public passwordField!: string;
  public hidePasswordField = true;

  private challengeParams: Params = { page: 'da88ee3dd8a1' };

  private user: User = {
    hashPassword:
      'dcd97882e46dae0d210eb77be7f6492ec65d22066e23752feb106dfe5b249191',
    salt: '3de2292e-3109-4df9-ba6c-0b3fba887dbd',
    username: '775307033826',
  };

  constructor(
    private _snackBar: MatSnackBar,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    const info: SignInInfo = JSON.parse(this.cookieService.get('signInInfo'));
    if (info.loggedIn && new Date(info.expires) > new Date()) {
      this.navigateToChallenge();
    } else {
      this.cookieService.delete('signInInfo');
    }
  }

  public unameHint(): void {
    alert(
      "This is a number that really gets watched,\nso we can always know if the system got botched.\n\nWe use it to aid in our short term survival,\nas we wait for it's much anticipated arrival.",
    );
  }

  public passHint(): void {
    alert(
      "This bit of text is hidden in plain sight,\nBut something is wrong and you can't see it right.\n\nThis text is not like the rest all crisp and opaque,\nBut you could try to highlight it to catch a little break.",
    );
  }

  public login(): void {
    if (
      this.usernameField === this.user.username &&
      new shajs.sha256()
        .update(this.user.salt + '-' + this.passwordField)
        .digest('hex') === this.user.hashPassword
    ) {
      const payload: SignInInfo = {
        expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
        loggedIn: true,
      };
      const cookie = JSON.stringify(payload);
      this.cookieService.set('signInInfo', cookie);
      console.log(this.cookieService.get('signInInfo'));
      this.navigateToChallenge();
      return;
    }

    this.sendSnack('Login Error: Incorrect Username or Password');
  }

  private navigateToChallenge(): void {
    this.router.navigate([], {
      queryParams: this.challengeParams,
      relativeTo: this.activatedRoute,
    });
  }

  private sendSnack(message: string): void {
    this._snackBar.open(message, undefined, { duration: 5000 });
  }
}

// Hashing test code
// const exibit: string = new shajs.sha256().update('testplaceholder').digest('hex');
//     if (this.user.hashPassword === exibit) {
//       console.log('its a win');
//     }
