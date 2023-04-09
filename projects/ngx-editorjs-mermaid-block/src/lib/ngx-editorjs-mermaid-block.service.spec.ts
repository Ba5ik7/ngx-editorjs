import { TestBed } from '@angular/core/testing';

import { NgxEditorjsMermaidBlockService } from './ngx-editorjs-mermaid-block.service';

describe('NgxEditorjsMermaidBlockService', () => {
  let service: NgxEditorjsMermaidBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorjsMermaidBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
