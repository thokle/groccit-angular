import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurphaseComponent } from './purphase.component';

describe('PurphaseComponent', () => {
  let component: PurphaseComponent;
  let fixture: ComponentFixture<PurphaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurphaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
