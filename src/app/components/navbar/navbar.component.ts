import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.sass'],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private projectParams: Params = { page: 'projects' };
  private homeParams: Params = { };


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  // "implements onInit" might be necessary
  
  public openProjects(): void {
    this.router.navigate([],{
      relativeTo: this.activatedRoute,
      queryParams: this.projectParams,
    });
  }
  
  public openHome(): void {
    this.router.navigate([],{
      relativeTo: this.activatedRoute,
      queryParams: this.homeParams,
    });
  }

}
