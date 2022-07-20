import { TestBed } from '@angular/core/testing';

import { NgxEditorjsService } from './ngx-editorjs.service';

describe('NgxEditorjsService', () => {
  let service: NgxEditorjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
