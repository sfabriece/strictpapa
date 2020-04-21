import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictNullChecksComponent } from './strict-null-checks.component';

describe('StrictNullChecksComponent', () => {
  let component: StrictNullChecksComponent;
  let fixture: ComponentFixture<StrictNullChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrictNullChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictNullChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
