import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-vacancy',
  templateUrl: './placeholder-vacancy.component.html',
  styleUrls: ['./placeholder-vacancy.component.css']
})
export class PlaceholderVacancyComponent implements OnInit {

  placeholderDetail: any[];

  heading= 'Welcome to the All Jobs Portal SA';
  imageUrl= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiULYamFKSfOvrhsllJ68HQiflQCTk0U4pw&usqp=CAU';
  message = 'The online job portal will use the internet to advertise and find best people for jobs. ' +
  'The system is to be used by employers to improve efficiency in employment sector and it will provide' +
  ' jobs catalog and information to members or users and help them decide on which jobs to apply.';


  constructor() {
  }

  ngOnInit(): void {

  }
}
