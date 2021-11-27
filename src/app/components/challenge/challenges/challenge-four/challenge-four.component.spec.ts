import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeFourComponent } from './challenge-four.component';

describe('ChallengeFourComponent', () => {
  let component: ChallengeFourComponent;
  let fixture: ComponentFixture<ChallengeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
