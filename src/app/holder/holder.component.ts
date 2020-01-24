import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Turno } from '../turno/turno';
import { Observable, Subscription } from 'rxjs';
import { AnimationControlService } from '../service/animation-control.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css'],
  animations: [
    trigger('newTurn', [
      state('void', style({
        opacity: 0
      })), state('show', style({
        opacity: 1
      })),
      transition('void <=> show', [
        animate('1.5s 5s')
      ])
    ])
  ]
})
export class HolderComponent implements OnInit, OnChanges {

  private eventsSubscription: Subscription;
  animationStatus: any;
  selTurnos = [];
  turnPunt = 0;
  turno: Turno;


  constructor(private acSrv: AnimationControlService) {
    this.acSrv.currentTurno.subscribe(res => {
      this.turno = res;
      if (res) {
        this.selTurnos.push(res);
        this.animationStatus = 'show';
      } else {
        // FALSE
      }
    });
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

}
