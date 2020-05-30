import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [];
  @Input() column:number;
  @Input() device:string;

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('assets/data/data.json', {}).subscribe((data:any) => {
      console.log(data);
      this.services = data;
    })
  }

}
