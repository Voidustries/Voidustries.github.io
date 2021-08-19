import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.sass'],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

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
