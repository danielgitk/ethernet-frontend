import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsListComponent } from './news/news-list/news-list.component';

const routes: Routes = [
  {path:'', component: NewsListComponent},
  {path:'login', component: LoginComponent},
  {path:'newsdetails',component:NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
