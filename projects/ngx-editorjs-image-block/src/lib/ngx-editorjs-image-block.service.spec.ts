import { TestBed } from '@angular/core/testing';

import { NgxEditorjsImageBlockService } from './ngx-editorjs-image-block.service';

describe('NgxEditorjsImageBlockService', () => {
  let service: NgxEditorjsImageBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorjsImageBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
