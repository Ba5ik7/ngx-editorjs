import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEditorjsClientComponent } from './ngx-editorjs-client.component';

describe('NgxEditorjsClientComponent', () => {
  let component: NgxEditorjsClientComponent;
  let fixture: ComponentFixture<NgxEditorjsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEditorjsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEditorjsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
