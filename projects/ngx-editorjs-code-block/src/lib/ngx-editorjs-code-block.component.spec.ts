import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsCodeBlockComponent } from './ngx-editorjs-code-block.component';

describe('NgxEditorjsCodeBlockComponent', () => {
  let component: NgxEditorjsCodeBlockComponent;
  let fixture: ComponentFixture<NgxEditorjsCodeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsCodeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorjsCodeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
