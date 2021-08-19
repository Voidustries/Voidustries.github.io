import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersComponent } from './components/developers/developers.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  // {
  //   path: 'path',
  //   component: component
  // },
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: ProjectsComponent,
    path: 'projects',
  },
  {
    component: DevelopersComponent,
    path: 'developers',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
