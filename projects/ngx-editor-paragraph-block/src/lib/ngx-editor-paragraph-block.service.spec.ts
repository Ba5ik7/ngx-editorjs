import { TestBed } from '@angular/core/testing';

import { NgxEditorParagraphBlockService } from './ngx-editor-paragraph-block.service';

describe('NgxEditorParagraphBlockService', () => {
  let service: NgxEditorParagraphBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorParagraphBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
