import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandPage } from './stand.page';

describe('StandPage', () => {
  let component: StandPage;
  let fixture: ComponentFixture<StandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
