import { Component, OnInit } from '@angular/core';
interface sortBy1 {
  value: string;
  viewValue: string;
}
interface sortBy2 {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  deadlineOrTitle: sortBy1[] = [
    {value: 'Deadline', viewValue: 'Deadline'},
    {value: 'Title', viewValue: 'Title'}
  ];
  AscendOrDescend: sortBy2[] = [
    {value: 'Ascending', viewValue: 'Ascending'},
    {value: 'Descending', viewValue: 'Descending'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
