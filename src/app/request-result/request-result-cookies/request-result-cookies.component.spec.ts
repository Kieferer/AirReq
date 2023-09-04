import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResultCookiesComponent } from './request-result-cookies.component';

describe('RequestResultCookiesComponent', () => {
  let component: RequestResultCookiesComponent;
  let fixture: ComponentFixture<RequestResultCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestResultCookiesComponent]
    });
    fixture = TestBed.createComponent(RequestResultCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
