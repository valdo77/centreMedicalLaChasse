import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {

  services = [];
  column:number;
  private mediaSub: Subscription;

  constructor(private http: HttpClient, private mediaObserver: MediaObserver ) { }

  ngOnInit(): void {
     this.mediaObserver.media$.subscribe((change: MediaChange) => {
      if(change.mqAlias === 'xs' || change.mqAlias === 'lg' || change.mqAlias === 'md') this.column = 3;
      if(change.mqAlias === 'sm') this.column = 2;
      if(change.mqAlias === 'xs') this.column = 1;
    })

    this.http.get('assets/data/data.json', {}).subscribe((data:any) => {
      this.services = data;
    })
  }

  ngOnDestroy() {
    if(this.mediaSub) this.mediaSub.unsubscribe();
  }

}
