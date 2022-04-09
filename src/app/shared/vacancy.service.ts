import { Injectable } from '@angular/core';
import {TechStack} from "../components/vaccancy-list/techStackModel,ts";
import {Vacancy} from "../components/vaccancy-list/vaccancyModel";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private jobVacancies: Vacancy[] = [
    new Vacancy(511,
      'Software Engineer',
      'Looking for a highly-skilled and experienced developer',
      new Date(2021,6,13),
      'Centurion - Sundown Crescent',
      'Available',
      65000,
      'https://www.gousa.study/images/masters-in-software-engineering-usa.jpg'
    ),

    new Vacancy(512,
      'Human Resources Practitioner',
      'Looking for heavily experienced and good management style professional ',
      new Date(2022,2,5),
      'Sandton - Rivonia',
      'Available',
      36000,
      'https://resources.workable.com/wp-content/uploads/2018/09/How-to-hire-your-first-HR-person-thumb.png'
    ),

    new Vacancy(516,
      'Web Designer',
      'Looking for a young passionate web designer looking to create a name in the industry ',
      new Date(2022,5,20),
      'Randburg - Fairlands',
      'Taken',
      null,
      'https://savvyify.com/wp-content/uploads/2018/10/tips-for-creative-web-designer.jpg',
      [
        new TechStack('Optimitum Media','Junior',1,
          ['Courageous','Reliable','Fast-Learner','Team-Player','Ambitious','Work under-pressure']),
      ]
    ),
  ];

  getVacancies() {
    return this.jobVacancies.slice();
  }

  getSingleVacancy(index: number){
    return this.jobVacancies[index];
  }
  constructor() { }
}
