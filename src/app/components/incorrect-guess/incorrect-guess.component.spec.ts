import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectGuessComponent } from './incorrect-guess.component';

describe('IncorrectGuessComponent', () => {
  let component: IncorrectGuessComponent;
  let fixture: ComponentFixture<IncorrectGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncorrectGuessComponent]
    });
    fixture = TestBed.createComponent(IncorrectGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
