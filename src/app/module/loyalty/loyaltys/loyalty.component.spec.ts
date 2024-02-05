import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltysComponent } from './loyalty.component';

describe('LoyaltysComponent', () => {
  let component: LoyaltysComponent;
  let fixture: ComponentFixture<LoyaltysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoyaltysComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoyaltysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
