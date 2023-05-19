import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourGuessComponent } from './colour-guess.component';

describe('ColourGuessComponent', () => {
  let component: ColourGuessComponent;
  let fixture: ComponentFixture<ColourGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColourGuessComponent]
    });
    fixture = TestBed.createComponent(ColourGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
