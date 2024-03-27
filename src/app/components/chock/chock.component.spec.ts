import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChockComponent } from './chock.component';

describe('ChockComponent', () => {
  let component: ChockComponent;
  let fixture: ComponentFixture<ChockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChockComponent]
    });
    fixture = TestBed.createComponent(ChockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
