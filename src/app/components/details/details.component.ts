import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  services = {};
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
      document.getElementById('details').scrollIntoView({behavior:'smooth', block: "center"})
    }, 300);
  }


  getData() {
    this.activatedRoute.params.subscribe(data => {
      let id  = data.id;

      this.http.get('assets/data/data.json', {}).subscribe((data:any) => {
        data.forEach(element => {
            if(element.id === +id) {
              this.services = element;
              return;
            }
        });
      })

    })
  }

}
