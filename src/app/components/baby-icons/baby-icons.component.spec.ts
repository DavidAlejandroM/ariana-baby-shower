import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyIconsComponent } from './baby-icons.component';

describe('BabyIconsComponent', () => {
  let component: BabyIconsComponent;
  let fixture: ComponentFixture<BabyIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
