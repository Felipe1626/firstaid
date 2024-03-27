import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLSComponent } from './bls.component';

describe('BLSComponent', () => {
  let component: BLSComponent;
  let fixture: ComponentFixture<BLSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BLSComponent]
    });
    fixture = TestBed.createComponent(BLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
