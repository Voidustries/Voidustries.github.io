import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { MatCommonModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MiddleComponent } from './components/middle/middle.component';
import { LoginComponent } from './components/login/login.component';

// First-party
import { FormsModule } from '@angular/forms';

// Thrid-party
import { CookieService } from 'ngx-cookie-service';

// Challenges
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ChallengeTwoComponent } from './components/challenge/challenges/challenge-two/challenge-two.component';
import { ChallengeThreeComponent } from './components/challenge/challenges/challenge-three/challenge-three.component';
import { ChallengeFourComponent } from './components/challenge/challenges/challenge-four/challenge-four.component';
import { ChallengeFiveComponent } from './components/challenge/challenges/challenge-five/challenge-five.component';
import { ChallengeSixComponent } from './components/challenge/challenges/challenge-six/challenge-six.component';



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    MiddleComponent,
    LoginComponent,
    ChallengeComponent,
    ChallengeTwoComponent,
    ChallengeThreeComponent,
    ChallengeFourComponent,
    ChallengeFiveComponent,
    ChallengeSixComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCommonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  providers: [
    CookieService,
  ],
})
export class AppModule {}
