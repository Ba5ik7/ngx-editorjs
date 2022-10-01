import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsBlockquotesBlockComponent } from './ngx-editorjs-blockquotes-block.component';

describe('NgxEditorjsBlockquotesBlockComponent', () => {
  let component: NgxEditorjsBlockquotesBlockComponent;
  let fixture: ComponentFixture<NgxEditorjsBlockquotesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsBlockquotesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorjsBlockquotesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
