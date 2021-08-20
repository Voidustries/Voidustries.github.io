import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.sass'],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(private router: Router) { }

  // "implements onInit" might be necessary

  openProjects(): void {
    this.router.navigate(['projects']);
  }
  openDevelopers(): void {
    this.router.navigate(['developers']);
  }
  openHome(): void {
    this.router.navigate(['/']);
  }

}
