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
  styleUrls: ['./challenge.component.sass'],
  templateUrl: './challenge.component.html',
})
export class ChallengeComponent implements OnInit {
  public challengeStatus: ChallengeStatusInterface = {
    challengeFive: {
      completed: false,
      flag: '',
    },
    challengeFour: {
      completed: false,
      flag: '',
    },
    challengeOne: {
      completed: true,
      login: 'placeholder',
      password: '2f1d88a0-37a5-4385-bf0e-40c58daf296a',
    },
    challengeThree: {
      completed: false,
      flag: '',
    },
    challengeTwo: {
      completed: false,
      date: '',
    },
  };

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {}

  public ngOnInit(): void {

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

  public openChallengeTwo(): void {
    const ref = this.dialog.open(ChallengeTwoComponent, { data: this.challengeStatus.challengeTwo});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  public openChallengeThree(): void {
    const ref = this.dialog.open(ChallengeThreeComponent, { data: this.challengeStatus.challengeThree});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  public openChallengeFour(): void {
    const ref = this.dialog.open(ChallengeFourComponent, { data: this.challengeStatus.challengeFour});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  public openChallengeFive(): void {
    const ref = this.dialog.open(ChallengeFiveComponent, { data: this.challengeStatus.challengeFive});

    ref.afterClosed().subscribe((_) => {
      this.updateCookie();
    });
  }

  public openChallengeSix(): void {
    this.dialog.open(ChallengeSixComponent);
  }

  private updateCookie(): void {
    this.cookieService.set('challengeStatus', JSON.stringify(this.challengeStatus));
  }
}
