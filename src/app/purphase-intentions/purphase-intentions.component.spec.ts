import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurphaseIntentionsComponent } from './purphase-intentions.component';

describe('PurphaseIntentionsComponent', () => {
  let component: PurphaseIntentionsComponent;
  let fixture: ComponentFixture<PurphaseIntentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurphaseIntentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurphaseIntentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
