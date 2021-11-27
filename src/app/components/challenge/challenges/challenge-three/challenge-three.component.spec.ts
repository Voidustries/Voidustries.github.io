import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeThreeComponent } from './challenge-three.component';

describe('ChallengeThreeComponent', () => {
  let component: ChallengeThreeComponent;
  let fixture: ComponentFixture<ChallengeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
