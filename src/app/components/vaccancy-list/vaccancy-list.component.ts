import { Component, OnInit } from '@angular/core';

import {VacancyService} from "../../shared/vacancy.service";
import {Vacancy} from "./vaccancyModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vaccancy-list',
  templateUrl: './vaccancy-list.component.html',
  styleUrls: ['./vaccancy-list.component.css']
})
export class VaccancyListComponent implements OnInit {

  vacancies: Vacancy[];

  constructor(private service: VacancyService,  private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.vacancies = this.service.getVacancies();
  }

}
