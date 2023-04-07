import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsQuizBlockComponent } from './ngx-editorjs-quiz-block.component';

describe('NgxEditorjsQuizBlockComponent', () => {
  let component: NgxEditorjsQuizBlockComponent;
  let fixture: ComponentFixture<NgxEditorjsQuizBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsQuizBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorjsQuizBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
