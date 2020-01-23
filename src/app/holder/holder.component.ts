import { Component, OnInit, Input } from '@angular/core';
import { Turno } from '../turno/turno';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;

  isOn = true;

  turnos = [
    new Turno('ACJ25', 'Mesa 1'),
    new Turno('ACJ26', 'Mesa 2'),
    new Turno('ACJ30', 'Mesa 3'),
    new Turno('ACJ29', 'Mesa 3'),
    new Turno('ACJ42', 'Mesa 1'),
    new Turno('ACJ15', 'Mesa 1'),
    new Turno('ACJ12', 'Mesa 1'),
    new Turno('ACJ41', 'Mesa 3'),
    new Turno('ACJ07', 'Mesa 3'),
    ];

  selTurnos = [];
  turnPunt = 0;


  constructor() { }

  ngOnInit() {
    // Para poder leer el evento click del elemento padre
    this.eventsSubscription = this.events.subscribe(() => this.cambioTurno());
  }
  cambioTurno() {
      // comprobar para que no imprima elemento si no los hay disponibles en el array
    if (this.turnPunt <= (this.turnos.length - 1)) {
      // Se coloca un maximo de elementos para eliminar el de por encima.
      if ((this.selTurnos.length - 1) >= 5) {
        this.selTurnos.shift();
      }
      this.selTurnos.push(this.turnos[this.turnPunt]);
      this.turnPunt++;
      }

  }
  toggle() {
    this.isOn = !this.isOn;
  }
}
