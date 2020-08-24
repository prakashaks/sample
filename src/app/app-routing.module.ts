import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full'
  },

  
  {
    path: 'details',
    component: DetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
