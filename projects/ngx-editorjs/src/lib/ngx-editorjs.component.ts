import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-editorjs',
  template: `<form [formGroup]="formGroup"><p formControlName="init" contenteditable ></p></form>`
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
