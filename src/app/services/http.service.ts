import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositories, Repository } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private void_projects_url = "https://raw.githubusercontent.com/Voidustries/Voidustries.github.io/master/projects/projects.json"

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Repositories<Repository>> {
    return this.http.get<Repositories<Repository>>(this.void_projects_url);
  } 

}
