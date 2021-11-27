import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeFiveComponent } from './challenge-five.component';

describe('ChallengeFiveComponent', () => {
  let component: ChallengeFiveComponent;
  let fixture: ComponentFixture<ChallengeFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
