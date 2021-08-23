import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repositories, Repository } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-projects',
  styleUrls: ['./projects.component.sass'],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public repos!: Array<Repository>;
  private repoSub!: Subscription;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.repoSub = this.httpService
      .getProjects()
      .subscribe(async (repoList: Repositories<Repository>) => {
        this.repos = repoList.res;
      });
  }

  ngOnDestroy(): void {
    if (this.repoSub) {
      this.repoSub.unsubscribe();
    }
  }
}
