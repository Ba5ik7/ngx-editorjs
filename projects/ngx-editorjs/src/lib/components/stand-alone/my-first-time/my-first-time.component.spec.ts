import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstTimeComponent } from './my-first-time.component';

describe('MyFirstTimeComponent', () => {
  let component: MyFirstTimeComponent;
  let fixture: ComponentFixture<MyFirstTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
