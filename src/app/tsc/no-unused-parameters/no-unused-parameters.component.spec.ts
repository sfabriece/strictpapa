import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUnusedParametersComponent } from './no-unused-parameters.component';

describe('NoUnusedParametersComponent', () => {
  let component: NoUnusedParametersComponent;
  let fixture: ComponentFixture<NoUnusedParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoUnusedParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoUnusedParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
