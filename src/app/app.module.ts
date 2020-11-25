import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ServiceComponent } from './service/service.component';
import { TendersComponent } from './tenders/tenders.component';
import { DocumentsComponent } from './documents/documents.component';
import { AdministrationComponent } from './administration/administration.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutUsComponent,
    VacanciesComponent,
    ServiceComponent,
    TendersComponent,
    DocumentsComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
