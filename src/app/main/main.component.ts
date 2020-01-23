import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {
  }


  emitEventToChild() {
    this.eventsSubject.next();
  }
}
