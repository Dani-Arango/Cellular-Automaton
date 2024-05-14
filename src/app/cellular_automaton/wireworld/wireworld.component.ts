import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wireworld',
  standalone: true,
  imports: [],
  templateUrl: './wireworld.component.html',
  styleUrl: './wireworld.component.css'
})
export class WireworldComponent implements OnInit, AfterViewInit, OnDestroy {
  private defaults = [
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 3, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    [
      [0, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 0],
      [0, 1, 0, 1, 1, 0, 1],
      [0, 1, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 0],
    ]
  ];


  private celular: any = {
    2: 3,
    3: 1,
    0: 0,
    1: 1
  };
  private colors: any = {
    2: 'blue',
    3: 'red',
    0: 'black',
    1: 'yellow'
  };

  public isRunning = false;
  private grafic!: number[][];
  private interval: any;
  private pixels: number = 15;
  private canvas?: HTMLCanvasElement;
  private context?: CanvasRenderingContext2D;
  private eventFunction: any;
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;

  constructor() {
    this.eventFunction = this.putCell.bind(this);
  }

  ngOnInit(): void {
    this.canvas = this.myCanvas.nativeElement;
    this.context = this.canvas!.getContext('2d')!;
    this.generateMap();
  }

  ngAfterViewInit(): void {
    this.myCanvas.nativeElement.addEventListener('mouseup', this.eventFunction);
  }

  private draw() {
    const px = this.pixels;
    if (this.context) {
      this.grafic.forEach((element, y) => {
        element.forEach((data, x) => {
          this.context!.fillStyle = this.colors[data];
          this.context!.fillRect(x * px, y * px, px, px);
        });
      });
    }
  }

  private countOnAround(actual: number[]) {
    let contador = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const nuevaFila = actual[0] + i;
        const nuevaColumna = actual[1] + j;

        if (
          nuevaFila >= 0 &&
          nuevaFila < this.grafic.length &&
          nuevaColumna >= 0 &&
          nuevaColumna < this.grafic[0].length &&
          !(i === 0 && j === 0)
        ) {
          if (this.grafic[nuevaFila][nuevaColumna] == 2) {
            contador++;
          }
        }
      }
    }

    return contador;
  }

  public stop() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  public start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.step();
    }, 150);
  }

  private step() {
    this.grafic = this.grafic.map((data, i) => {
      return data.map((element, e) => {
        if (element == 1) {
          const vecinos = this.countOnAround([i, e]);
          if (vecinos > 0 && vecinos < 3) return 2;
        }
        return this.celular[element];
      })
    });
    this.draw();
  }

  private generateMap() {
    this.grafic = [];

    for (let i = 0; i < Math.ceil(600 / this.pixels); i++) {
      this.grafic.push([]);
      for (let j = 0; j < Math.ceil(1000 / this.pixels); j++) {
        this.grafic[i].push(0);
      }
    }

    this.draw();
  }

  public addFigure(numFigure: number) {
    this.generateMap();
    const figure = this.defaults[numFigure];
    for (let i = 0; i < figure.length; i++) {
      for (let j = 0; j < figure[i].length; j++) {
        this.grafic[i][j] = figure[i][j];
      }
    }

    this.draw();
  }

  private putCell(e: MouseEvent) {
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    const cellX = Math.floor(offsetX / this.pixels);
    const cellY = Math.floor(offsetY / this.pixels);

    this.grafic[cellY][cellX]++;
    if (this.grafic[cellY][cellX] > 3) this.grafic[cellY][cellX] = 0;

    this.draw();
  }

  ngOnDestroy(): void {
    this.myCanvas.nativeElement.removeEventListener('mouseup', this.eventFunction);
  }
}
