import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysStrictComponent } from './always-strict.component';

describe('AlwaysStrictComponent', () => {
  let component: AlwaysStrictComponent;
  let fixture: ComponentFixture<AlwaysStrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlwaysStrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysStrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
