import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../vaccancyModel";
import {VacancyService} from "../../../shared/vacancy.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-vaccany-detail',
  templateUrl: './vaccany-detail.component.html',
  styleUrls: ['./vaccany-detail.component.css']
})
export class VaccanyDetailComponent implements OnInit {

  job: Vacancy;
  id: number;

  constructor(private service: VacancyService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.job = this.service.getSingleVacancy(this.id);
      });
  }
}
