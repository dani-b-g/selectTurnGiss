import { Injectable } from '@angular/core';
import { Turno } from '../turno/turno';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationControlService {

  turnos = [
    new Turno('ACJ25', 'Mesa 1'),
    new Turno('ACJ26', 'Mesa 2'),
    new Turno('ACJ30', 'Mesa 3'),
    new Turno('ACJ29', 'Mesa 3'),
    new Turno('ACJ42', 'Mesa 1'),
    new Turno('ACJ15', 'Mesa 1'),
    new Turno('ACJ12', 'Mesa 1'),
    new Turno('ACJ41', 'Mesa 3'),
    new Turno('ACJ07', 'Mesa 3')
  ];

  indice: number;


  private currentTurnoSubject: BehaviorSubject<Turno>;
  public currentTurno: Observable<Turno>;

  constructor() {
    this.indice = 0;
    this.currentTurnoSubject = new BehaviorSubject<Turno>(null);
    this.currentTurno = this.currentTurnoSubject.asObservable();
  }


  public currentTurnoValue(i: number) {
    this.indice = i;
    this.currentTurnoSubject.next(this.turnos[i]);

  }

}


