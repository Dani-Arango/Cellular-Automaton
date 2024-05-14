import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLifeComponent } from './game-life.component';

describe('GameLifeComponent', () => {
  let component: GameLifeComponent;
  let fixture: ComponentFixture<GameLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
