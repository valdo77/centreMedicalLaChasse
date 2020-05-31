import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home [column]="column"',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  column:number;
  constructor() { }

  ngOnInit(): void {
  }

}
