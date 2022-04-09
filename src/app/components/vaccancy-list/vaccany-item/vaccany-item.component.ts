import {Component, Input, OnInit} from '@angular/core';
import {Vacancy} from "../vaccancyModel";
import {VacancyService} from "../../../shared/vacancy.service";

@Component({
  selector: 'app-vaccany-item',
  templateUrl: './vaccany-item.component.html',
  styleUrls: ['./vaccany-item.component.css']
})
export class VaccanyItemComponent implements OnInit {

  @Input() vacancy: Vacancy;
  @Input() index: number;

  constructor(private vacService: VacancyService) { }

  ngOnInit(): void {
  }

}
