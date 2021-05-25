import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchformComponent } from './user-searchform.component';

describe('UserSearchformComponent', () => {
  let component: UserSearchformComponent;
  let fixture: ComponentFixture<UserSearchformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
