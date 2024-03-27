import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemorragiasComponent } from './hemorragias.component';

describe('HemorragiasComponent', () => {
  let component: HemorragiasComponent;
  let fixture: ComponentFixture<HemorragiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HemorragiasComponent]
    });
    fixture = TestBed.createComponent(HemorragiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
