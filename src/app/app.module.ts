import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { VaccancyListComponent } from './components/vaccancy-list/vaccancy-list.component';
import { VaccanyItemComponent } from './components/vaccancy-list/vaccany-item/vaccany-item.component';
import { VaccanyDetailComponent } from './components/vaccancy-list/vaccany-detail/vaccany-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditVacancyComponent } from './components/vacancies/edit-vacancy/edit-vacancy.component';
import { PlaceholderVacancyComponent } from './components/vacancies/placeholder-vacancy/placeholder-vacancy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    VaccancyListComponent,
    VaccanyItemComponent,
    VaccanyDetailComponent,
    PageNotFoundComponent,
    EditVacancyComponent,
    PlaceholderVacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
