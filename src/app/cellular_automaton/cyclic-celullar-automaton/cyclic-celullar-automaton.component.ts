import { FormsModule } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cyclic-celullar-automaton',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cyclic-celullar-automaton.component.html',
  styleUrl: './cyclic-celullar-automaton.component.css'
})
export class CyclicCelullarAutomatonComponent implements OnInit {
  private interval: any;
  public isRunning = false;
  public cantColors: number;

  private copy: string[][] = [];
  private grafic: string[][] = [];
  public colors: string[] = [
    "#FF5733", "#FFBD33", "#FFD133", "#FFEA33", "#E3FF33",
    "#8CFF33", "#33FF41", "#33FFB5", "#33F1FF", "#33A7FF",
    "#336BFF", "#5F33FF", "#A133FF", "#FF33F4", "#FF33A1",
    "#FF3366", "#FF335A", "#FF333F", "#FF7227", "#FFAA27",
    "#FFE827", "#C6FF27", "#69FF27", "#27FF4E", "#27FFC2",
    "#27F0FF", "#2782FF", "#614CFF", "#B327FF", "#FF27F7"
  ].reverse();

  public pixels: number = 15;
  private canvas?: HTMLCanvasElement;
  private context?: CanvasRenderingContext2D;
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;

  constructor() {
    this.cantColors = this.colors.length / 3;
  }

  // Canvas
  ngOnInit(): void {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas!.getContext('2d')!;
    this.generateColorsMap();
  }

  public draw() {
    const px = this.pixels;
    if (this.context) {
      this.grafic.forEach((element, y) => {
        element.forEach((data, x) => {
          this.context!.fillStyle = data;
          this.context!.fillRect(x * px, y * px, px, px);
        });
      });
    }
  }

  public generateColorsMap() {
    this.grafic = [];
    for (let i = 0; i < Math.ceil(600 / this.pixels); i++) {
      this.grafic.push([]);
      for (let j = 0; j < Math.ceil(1000 / this.pixels); j++) {
        this.grafic[i].push(
          this.colors[Math.floor(Math.random() * this.cantColors)]
        );
      }
    }
    this.draw();
  }

  private step() {
    this.copy = JSON.parse(JSON.stringify(this.grafic));
    this.grafic.forEach((data, i) => {
      data.forEach((element, e) => {
        this.transformCell([i, e], element);
      });
    });
    this.grafic = this.copy;
    this.draw();
  }

  private transformCell(actual: number[], color: string) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const y = actual[0] + i;
        const x = actual[1] + j;
        if (
          y >= 0 &&
          y < this.grafic.length &&
          x >= 0 &&
          x < this.grafic[0].length &&
          !(i === 0 && j === 0)
        ) {
          let index2 = this.colors.findIndex(
            (data) => data == this.grafic[y][x]
          );

          if (index2 == 0) index2 = this.cantColors;
          if (this.colors[index2 - 1] == color) {
            this.copy[y][x] = color;
          }
        }
      }
    }
  }

  public stop() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  public start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.step();
    }, 100);
  }

}
