import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsMermaidBlockComponent } from './ngx-editorjs-mermaid-block.component';

describe('NgxEditorjsMermaidBlockComponent', () => {
  let component: NgxEditorjsMermaidBlockComponent;
  let fixture: ComponentFixture<NgxEditorjsMermaidBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsMermaidBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorjsMermaidBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
