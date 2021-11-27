import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-middle',
  styleUrls: ['./middle.component.sass'],
  templateUrl: './middle.component.html',
})
export class MiddleComponent implements OnInit, OnDestroy {
  public projects!: boolean;
  public home!: boolean;
  public login!: boolean;
  public b3c1865946a1!: boolean;
  public da88ee3dd8a1!: boolean;
  private routeSub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
  ){ }
  
  public ngOnInit(): void {
    this.routeSub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      switch (params['page']) {
        case "projects":
          this.projects = true;
          this.home = false;
          this.b3c1865946a1 = false;
          this.da88ee3dd8a1 = false
          break;
        case "b3c1865946a1":
          this.b3c1865946a1 = true;
          this.projects = false;
          this.home = false;
          this.da88ee3dd8a1 = false;
          break;
        case "da88ee3dd8a1":
          this.da88ee3dd8a1 = true;
          this.projects = false;
          this.home = false;
          this.b3c1865946a1 = false;
          break;
        default:
          this.home = true;
          this.projects = false;
          this.b3c1865946a1 = false;
          this.da88ee3dd8a1 = false;
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
