import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-middle',
  styleUrls: ['./middle.component.sass'],
  templateUrl: './middle.component.html',
})
export class MiddleComponent implements OnInit {
  public projects!: boolean;
  private routeSub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute
  ){ }
  
  ngOnInit(): void {
    this.routeSub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params)
      if (params['page'] == "projects") {
        this.projects = true;
      } else {
        this.projects = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
