import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeSixComponent } from './challenge-six.component';

describe('ChallengeSixComponent', () => {
  let component: ChallengeSixComponent;
  let fixture: ComponentFixture<ChallengeSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
