import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VaccancyListComponent} from "./components/vaccancy-list/vaccancy-list.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {EditVacancyComponent} from "./components/vacancies/edit-vacancy/edit-vacancy.component";
import {VaccanyDetailComponent} from "./components/vaccancy-list/vaccany-detail/vaccany-detail.component";
import {PlaceholderVacancyComponent} from "./components/vacancies/placeholder-vacancy/placeholder-vacancy.component";

const routes: Routes = [
  {path: '', redirectTo: '/vaccancy', pathMatch: 'full'},
  {path: 'vaccancy', component: VaccancyListComponent, children: [
      {path:'new', component: EditVacancyComponent},
      {path:'', component: PlaceholderVacancyComponent},
      {path:':id', component: VaccanyDetailComponent},
      {path:':id/edit', component: EditVacancyComponent},
    ]},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo:'/not-found' },

  //{path: 'users', component: MainDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
