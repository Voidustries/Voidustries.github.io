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
          break;
        default:
          this.home = true;
          this.projects = false;
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
