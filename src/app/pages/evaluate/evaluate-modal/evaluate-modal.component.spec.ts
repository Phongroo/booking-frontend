import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateModalComponent } from './evaluate-modal.component';

describe('EvaluateModalComponent', () => {
  let component: EvaluateModalComponent;
  let fixture: ComponentFixture<EvaluateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
