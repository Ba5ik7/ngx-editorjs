import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorParagraphBlockComponent } from './ngx-editorjs-paragraph-block.component';

describe('NgxEditorParagraphBlockComponent', () => {
  let component: NgxEditorParagraphBlockComponent;
  let fixture: ComponentFixture<NgxEditorParagraphBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorParagraphBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorParagraphBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
