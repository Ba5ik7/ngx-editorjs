import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-editorjs',
  template: `<form [formGroup]="formGroup"><p formControlName="init" contenteditable ></p></form>`,
  styles: [
  `[contenteditable="true"].single-line {
    white-space: nowrap;
    width:200px;
    overflow: hidden;
} 
[contenteditable="true"].single-line br {
    display:none;

}
[contenteditable="true"].single-line * {
    display:inline;
    white-space:nowrap;
}`
  ]
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
