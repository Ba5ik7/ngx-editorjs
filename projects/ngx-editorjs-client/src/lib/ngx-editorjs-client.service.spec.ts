import { TestBed } from '@angular/core/testing';

import { NgxEditorjsClientService } from './ngx-editorjs-client.service';

describe('NgxEditorjsClientService', () => {
  let service: NgxEditorjsClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorjsClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
