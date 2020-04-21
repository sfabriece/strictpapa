import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictFunctionTypesComponent } from './strict-function-types.component';

describe('StrictFunctionTypesComponent', () => {
  let component: StrictFunctionTypesComponent;
  let fixture: ComponentFixture<StrictFunctionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrictFunctionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictFunctionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
