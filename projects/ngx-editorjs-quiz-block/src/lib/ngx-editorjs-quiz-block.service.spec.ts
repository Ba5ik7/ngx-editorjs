import { TestBed } from '@angular/core/testing';

import { NgxEditorjsQuizBlockService } from './ngx-editorjs-quiz-block.service';

describe('NgxEditorjsQuizBlockService', () => {
  let service: NgxEditorjsQuizBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEditorjsQuizBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
