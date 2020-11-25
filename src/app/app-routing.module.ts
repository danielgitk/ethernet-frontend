import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdministrationComponent } from './administration/administration.component';
import { LoginComponent } from './auth/login/login.component';
import { DocumentsComponent } from './documents/documents.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ServiceComponent } from './service/service.component';
import { TendersComponent } from './tenders/tenders.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

const routes: Routes = [
  {path:'news', component: NewsListComponent},
  {path:'login', component: LoginComponent},
  {path:'newsdetails',component:NewsDetailsComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'adminintrations', component: AdministrationComponent},
  {path:'documents', component: DocumentsComponent},
  {path:'services', component: ServiceComponent},
  {path:'tenders', component: TendersComponent},
  {path:'vacancies', component: VacanciesComponent},
  // {path:'/', component: NewsListComponent}
  // {path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  // {path:'newsList',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
