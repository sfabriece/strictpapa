import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnusedLocalsComponent } from './no-unused-locals.component';

describe('NoUnusedLocalsComponent', () => {
  let component: NoUnusedLocalsComponent;
  let fixture: ComponentFixture<NoUnusedLocalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoUnusedLocalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoUnusedLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
