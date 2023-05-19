import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectGuessComponent } from './correct-guess.component';

describe('CorrectGuessComponent', () => {
  let component: CorrectGuessComponent;
  let fixture: ComponentFixture<CorrectGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrectGuessComponent]
    });
    fixture = TestBed.createComponent(CorrectGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
