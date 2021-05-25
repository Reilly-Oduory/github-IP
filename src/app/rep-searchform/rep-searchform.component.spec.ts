import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepSearchformComponent } from './rep-searchform.component';

describe('RepSearchformComponent', () => {
  let component: RepSearchformComponent;
  let fixture: ComponentFixture<RepSearchformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepSearchformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepSearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
