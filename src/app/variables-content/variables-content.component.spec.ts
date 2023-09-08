import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesContentComponent } from './variables-content.component';

describe('VariablesContentComponent', () => {
  let component: VariablesContentComponent;
  let fixture: ComponentFixture<VariablesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariablesContentComponent]
    });
    fixture = TestBed.createComponent(VariablesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
