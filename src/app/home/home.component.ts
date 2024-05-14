import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CyclicCelullarAutomatonComponent,
  WireworldComponent,
  GameLifeComponent
} from './../cellular_automaton/util';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CyclicCelullarAutomatonComponent, WireworldComponent, GameLifeComponent, InfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedComponent = 0;

  selectComponent(componentId: number) {
    this.selectedComponent = componentId;
  }
}
