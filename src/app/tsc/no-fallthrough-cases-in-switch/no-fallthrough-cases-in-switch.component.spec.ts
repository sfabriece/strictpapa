import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFallthroughCasesInSwitchComponent } from './no-fallthrough-cases-in-switch.component';

describe('NoFallthroughCasesInSwitchComponent', () => {
  let component: NoFallthroughCasesInSwitchComponent;
  let fixture: ComponentFixture<NoFallthroughCasesInSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFallthroughCasesInSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFallthroughCasesInSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
