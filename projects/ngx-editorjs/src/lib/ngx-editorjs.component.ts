import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContenteditableValueAccessor } from './contenteditable-value-accessor/contenteditable-value-accessor.directive';

@Component({
  selector: 'ngx-editorjs',
  template: `<form [formGroup]="formGroup"><div header formControlName="init" >NG CONTENT</div></form>`
})

export class NgxEditorjsComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    init: ['', []]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((data) => {
      console.log({
        data
      });      
    });
  }
}
