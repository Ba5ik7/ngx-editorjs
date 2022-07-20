import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsComponent } from './ngx-editorjs.component';

describe('NgxEditorjsComponent', () => {
  let component: NgxEditorjsComponent;
  let fixture: ComponentFixture<NgxEditorjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEditorjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
