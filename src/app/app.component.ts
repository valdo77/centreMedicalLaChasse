import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    private mediaSub: Subscription;
    device: string;
    column:number;

    constructor(private mediaObserver: MediaObserver  ){
    }

    ngOnInit() {
      this.mediaSub = this.mediaObserver.media$.subscribe((change: MediaChange) => {
        console.log(change.mqAlias);
        this.device = change.mqAlias;

        if(this.device === 'xs' || this.device === 'lg' || this.device === 'md') this.column = 3;
        if(this.device === 'sm') this.column = 2;
        if(this.device === 'xs') this.column = 1;

      })
    }

    ngOnDestroy() {
      if(this.mediaSub) this.mediaSub.unsubscribe();
    }

    toggleMenu() {
      document.getElementById('menu').classList.toggle('show')
    }
}
