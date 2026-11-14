import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-insignia',
  templateUrl: './insignia.html',
  styleUrl: './insignia.css',
})
export class Insignia {
  color = input<'azul' | 'verde' | 'rojo'>('azul');
}