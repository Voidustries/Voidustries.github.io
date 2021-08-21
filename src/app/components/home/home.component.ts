import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.sass'],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public technologiesSlugs = [
    "angular",
    "typescript",
    "html5",
    "sass",
    "github",
    "githubactions",
  ]

  constructor() { }

  // "implements onInit" might be necessary
  // TODO: Pull from GitHub API to display the top 6 Technologies used

}
