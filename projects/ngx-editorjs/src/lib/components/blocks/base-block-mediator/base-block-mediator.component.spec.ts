import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBlockMediatorComponent } from './base-block-mediator.component';

describe('BaseBlockMediatorComponent', () => {
  let component: BaseBlockMediatorComponent;
  let fixture: ComponentFixture<BaseBlockMediatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BaseBlockMediatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseBlockMediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
