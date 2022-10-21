import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsImageBlockComponent } from './ngx-editorjs-image-block.component';

describe('NgxEditorjsImageBlockComponent', () => {
  let component: NgxEditorjsImageBlockComponent;
  let fixture: ComponentFixture<NgxEditorjsImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsImageBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorjsImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
