import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-boton',
  templateUrl: './boton.html',
  styleUrl: './boton.css',
})
export class Boton {
  variante = input<'primario' | 'secundario' | 'peligro'>('primario');
}