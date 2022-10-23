import { TestBed } from '@angular/core/testing';

import { NgxEditorjsCodeBlockService } from './ngx-editorjs-code-block.service';

describe('NgxEditorjsCodeBlockService', () => {
  let service: NgxEditorjsCodeBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorjsCodeBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
