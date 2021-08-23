import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './components/middle/middle.component';

const routes: Routes = [
  // {
  //   path: 'path',
  //   component: component
  // },
  {
    component: MiddleComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
