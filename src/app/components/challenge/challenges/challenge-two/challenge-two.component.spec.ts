import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeTwoComponent } from './challenge-two.component';

describe('ChallengeTwoComponent', () => {
  let component: ChallengeTwoComponent;
  let fixture: ComponentFixture<ChallengeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
