import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsContentComponent } from './collections-content.component';

describe('CollectionsContentComponent', () => {
  let component: CollectionsContentComponent;
  let fixture: ComponentFixture<CollectionsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionsContentComponent]
    });
    fixture = TestBed.createComponent(CollectionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
