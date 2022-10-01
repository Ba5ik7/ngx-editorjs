import { TestBed } from '@angular/core/testing';

import { NgxEditorBlockquotesBlockService } from './ngx-editor-blockquotes-block.service';

describe('NgxEditorBlockquotesBlockService', () => {
  let service: NgxEditorBlockquotesBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorBlockquotesBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
