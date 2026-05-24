import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-tecnico-layout',
 imports: [RouterOutlet, Sidebar],
  templateUrl: './tecnico-layout.html',
  styleUrl: './tecnico-layout.css',
})
export class TecnicoLayout {}
