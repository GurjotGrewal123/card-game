import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGuessComponent } from './number-guess.component';

describe('NumberGuessComponent', () => {
  let component: NumberGuessComponent;
  let fixture: ComponentFixture<NumberGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberGuessComponent]
    });
    fixture = TestBed.createComponent(NumberGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
