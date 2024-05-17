import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-life',
  standalone: true,
  imports: [],
  templateUrl: './game-life.component.html',
  styleUrl: './game-life.component.css'
})
export class GameLifeComponent implements OnInit, AfterViewInit, OnDestroy {
  private defaults = [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 0, 0, 1, 0, 1],
      [0, 0, 1, 1, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  ];
  private interval: any;
  public isRunning = false;
  private eventFunction: any;
  private pixels: number = 15;
  private canvas?: HTMLCanvasElement;
  private context?: CanvasRenderingContext2D;
  private grafic: number[][] = this.defaults[0];
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;

  constructor() {
    this.eventFunction = this.putCell.bind(this)
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
          this.context!.fillStyle = data ? 'black' : 'white';
          this.context!.fillRect(x * px, y * px, px, px);
        });
      });
    }
  }

  private liveAround(x: number, y: number) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newRow = x + i;
        const newCol = y + j;

        if (
          newRow >= 0 &&
          newRow < this.grafic.length &&
          newCol >= 0 &&
          newCol < this.grafic[0].length &&
          !(i === 0 && j === 0)
        ) {
          if (this.grafic[newRow][newCol]) {
            count++;
          }
        }
      }
    }

    return count;
  }

  public stop() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  public start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.step();
    }, 50);
  }

  private step() {
    this.grafic = this.grafic.map((data, x) => {
      return data.map((element, y) => {
        const neighbors = this.liveAround(x, y);
        if ((element) && neighbors < 2 || neighbors > 3) return 0;
        else if (neighbors === 3) return 1;
        return element;
      });
    });
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

  public generateMap(random: boolean = false) {
    this.grafic = [];

    const fillValue = random ? () => Math.round(Math.random()) : () => 0;

    for (let i = 0; i < Math.ceil(600 / this.pixels); i++) {
      this.grafic.push([]);
      for (let j = 0; j < Math.ceil(1000 / this.pixels); j++) {
        this.grafic[i].push(fillValue());
      }
    }

    this.draw();
  }

  private putCell(e: MouseEvent) {
    const canvas = e.currentTarget as HTMLCanvasElement;

    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    const offsetX = (e.offsetX / canvasWidth) * canvas.width;
    const offsetY = (e.offsetY / canvasHeight) * canvas.height;

    const cellX = Math.floor(offsetX / this.pixels);
    const cellY = Math.floor(offsetY / this.pixels);

    this.grafic[cellY][cellX] = this.grafic[cellY][cellX] ? 0 : 1;

    this.draw();
  }

  ngOnDestroy(): void {
    this.myCanvas.nativeElement.removeEventListener('mouseup', this.eventFunction);
  }
}
