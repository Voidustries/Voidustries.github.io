import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
