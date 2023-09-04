import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResultBodyComponent } from './request-result-body.component';

describe('RequestResultBodyComponent', () => {
  let component: RequestResultBodyComponent;
  let fixture: ComponentFixture<RequestResultBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestResultBodyComponent]
    });
    fixture = TestBed.createComponent(RequestResultBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
