import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitGuessComponent } from './suit-guess.component';

describe('SuitGuessComponent', () => {
  let component: SuitGuessComponent;
  let fixture: ComponentFixture<SuitGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuitGuessComponent]
    });
    fixture = TestBed.createComponent(SuitGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
