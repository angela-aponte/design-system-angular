import { Component } from '@angular/core';
import { Boton } from './boton/boton';
import { Alerta } from './alerta/alerta';
import { Insignia } from './insignia/insignia';

@Component({
  selector: 'app-root',
  imports: [Boton, Alerta, Insignia],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}