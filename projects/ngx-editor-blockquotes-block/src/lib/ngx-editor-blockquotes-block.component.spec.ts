import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorBlockquotesBlockComponent } from './ngx-editor-blockquotes-block.component';

describe('NgxEditorBlockquotesBlockComponent', () => {
  let component: NgxEditorBlockquotesBlockComponent;
  let fixture: ComponentFixture<NgxEditorBlockquotesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorBlockquotesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorBlockquotesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
