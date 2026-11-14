import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-alerta',
  templateUrl: './alerta.html',
  styleUrl: './alerta.css',
})
export class Alerta {
  tipo = input<'info' | 'exito' | 'error'>('info');
}