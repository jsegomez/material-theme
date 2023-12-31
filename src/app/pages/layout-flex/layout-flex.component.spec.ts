import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFlexComponent } from './layout-flex.component';

describe('LayoutFlexComponent', () => {
  let component: LayoutFlexComponent;
  let fixture: ComponentFixture<LayoutFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutFlexComponent]
    });
    fixture = TestBed.createComponent(LayoutFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
