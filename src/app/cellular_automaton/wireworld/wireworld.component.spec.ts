import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireworldComponent } from './wireworld.component';

describe('WireworldComponent', () => {
  let component: WireworldComponent;
  let fixture: ComponentFixture<WireworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WireworldComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WireworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
