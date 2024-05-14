import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclicCelullarAutomatonComponent } from './cyclic-celullar-automaton.component';

describe('CyclicCelullarAutomatonComponent', () => {
  let component: CyclicCelullarAutomatonComponent;
  let fixture: ComponentFixture<CyclicCelullarAutomatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyclicCelullarAutomatonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyclicCelullarAutomatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
