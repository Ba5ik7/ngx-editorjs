import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVAMediatorComponent } from './cvamediator.component';

describe('CVAMediatorComponent', () => {
  let component: CVAMediatorComponent;
  let fixture: ComponentFixture<CVAMediatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVAMediatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVAMediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
