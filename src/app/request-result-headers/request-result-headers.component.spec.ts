import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResultHeadersComponent } from './request-result-headers.component';

describe('RequestResultHeadersComponent', () => {
  let component: RequestResultHeadersComponent;
  let fixture: ComponentFixture<RequestResultHeadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestResultHeadersComponent]
    });
    fixture = TestBed.createComponent(RequestResultHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
