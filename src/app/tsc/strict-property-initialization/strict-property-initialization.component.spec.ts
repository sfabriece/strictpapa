import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictPropertyInitializationComponent } from './strict-property-initialization.component';

describe('StrictPropertyInitializationComponent', () => {
  let component: StrictPropertyInitializationComponent;
  let fixture: ComponentFixture<StrictPropertyInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrictPropertyInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictPropertyInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
