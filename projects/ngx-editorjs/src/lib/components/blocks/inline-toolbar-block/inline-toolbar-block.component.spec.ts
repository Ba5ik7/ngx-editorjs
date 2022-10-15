import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineToolbarBlockComponent } from './inline-toolbar-block.component';

describe('InlineToolbarBlockComponent', () => {
  let component: InlineToolbarBlockComponent;
  let fixture: ComponentFixture<InlineToolbarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineToolbarBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineToolbarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
