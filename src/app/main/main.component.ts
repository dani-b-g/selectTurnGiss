import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AnimationControlService } from '../service/animation-control.service';
import { Turno } from '../turno/turno';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('newTurn', [
      state('void', style({
        opacity: 0
      })), state('show', style({
        opacity: 1
      })),
      transition('void <=> show', [
        animate('0.5s')
      ])
    ]), trigger('newTurnBg', [
      state('void', style({
        opacity: 0
      })), state('show', style({
        opacity: 1,
        backgroundColor: 'white'
      })), transition('void <=> show', [
        animate('0.5s')
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  animationStatus = 'void';
  animationRun = true;
  turno: Turno;

  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private acSrv: AnimationControlService) {
    this.acSrv.currentTurno.subscribe(res => {
      this.turno = res;
      if (res) {
        this.animationStatus = 'show';
        this.animationRun = false;
        setTimeout(() => {
          this.animationStatus = 'void';
          this.animationRun = true;
        }, 5000);
      } else {
        // FALSe
      }

    });
  }

  ngOnInit() { }

  cambiarTurno() {
    if (this.animationRun) {
      this.acSrv.currentTurnoValue(this.acSrv.indice);
      this.acSrv.indice++;
    }
  }
}
