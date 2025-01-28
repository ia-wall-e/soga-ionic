import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreAPage } from './store-a.page';

describe('StoreAPage', () => {
  let component: StoreAPage;
  let fixture: ComponentFixture<StoreAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
