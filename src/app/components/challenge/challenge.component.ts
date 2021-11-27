import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ChallengeStatusInterface, SignInInfo } from './challenge.interface';
import { ChallengeFiveComponent } from './challenges/challenge-five/challenge-five.component';
import { ChallengeFourComponent } from './challenges/challenge-four/challenge-four.component';
import { ChallengeSixComponent } from './challenges/challenge-six/challenge-six.component';
import { ChallengeThreeComponent } from './challenges/challenge-three/challenge-three.component';
import { ChallengeTwoComponent } from './challenges/challenge-two/challenge-two.component';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.sass'],
})
export class ChallengeComponent implements OnInit {
  public challengeStatus: ChallengeStatusInterface = {
    challengeOne: {
      login: 'placeholder',
      password: '2f1d88a0-37a5-4385-bf0e-40c58daf296a',
      completed: true,
    },
    challengeTwo: {
      date: '',
      completed: false,
    },
    challengeThree: {
      flag: '',
      completed: false,
    },
    challengeFour: {
      flag: '',
      completed: false,
    },
    challengeFive: {
      flag: '',
      completed: false,
    }
  };

  constructor(
    private _snackBar: MatSnackBar,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {

    try {
      const info: SignInInfo = JSON.parse(this.cookieService.get('signInInfo'));
      if (!info.loggedIn || new Date(info.expires) < new Date()) {
        throw new Error('Unauthorized');
      }
    } catch {
      this.router.navigate([], {
        queryParams: { page: 'b3c1865946a1'},
        relativeTo:this.activatedRoute,
      })
    }

    try {
      this.challengeStatus = JSON.parse(this.cookieService.get('challengeStatus'));
    } catch (error) {
      this.cookieService.set('challengeStatus', JSON.stringify(this.challengeStatus));
    }
  }

  updateCookie() {
    this.cookieService.set('challengeStatus', JSON.stringify(this.challengeStatus));
  }

  openChallengeTwo() {
    const ref = this.dialog.open(ChallengeTwoComponent, { data: this.challengeStatus.challengeTwo});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  openChallengeThree() {
    const ref = this.dialog.open(ChallengeThreeComponent, { data: this.challengeStatus.challengeThree});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  openChallengeFour() {
    const ref = this.dialog.open(ChallengeFourComponent, { data: this.challengeStatus.challengeFour});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  openChallengeFive() {
    const ref = this.dialog.open(ChallengeFiveComponent, { data: this.challengeStatus.challengeFive});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  openChallengeSix() {
    this.dialog.open(ChallengeSixComponent);
  }
}
