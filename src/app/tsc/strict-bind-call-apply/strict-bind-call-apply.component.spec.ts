import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictBindCallApplyComponent } from './strict-bind-call-apply.component';

describe('StrictBindCallApplyComponent', () => {
  let component: StrictBindCallApplyComponent;
  let fixture: ComponentFixture<StrictBindCallApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrictBindCallApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictBindCallApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
