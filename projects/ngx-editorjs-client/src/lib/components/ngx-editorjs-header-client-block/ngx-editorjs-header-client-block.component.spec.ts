import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsHeaderClientBlockComponent } from './ngx-editorjs-header-client-block.component';

describe('NgxEditorjsHeaderClientBlockComponent', () => {
  let component: NgxEditorjsHeaderClientBlockComponent;
  let fixture: ComponentFixture<NgxEditorjsHeaderClientBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsHeaderClientBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorjsHeaderClientBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
