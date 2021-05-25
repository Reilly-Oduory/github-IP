import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepUIComponent } from './rep-ui.component';

describe('RepUIComponent', () => {
  let component: RepUIComponent;
  let fixture: ComponentFixture<RepUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
