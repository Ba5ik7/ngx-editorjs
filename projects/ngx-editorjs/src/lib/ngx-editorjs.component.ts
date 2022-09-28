import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdjustBlockPostionActions, NgxEditorjsService } from './ngx-editorjs.service';

@Component({
  selector: 'ngx-editorjs',
  templateUrl: './ngx-editorjs.component.html',
  styleUrls: ['ngx-editorjs.component.scss']
})

export class NgxEditorjsComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    init: ['', []],
    one: ['', []],
    two: ['', []],
    three: ['', []]
  })

  constructor(
    private formBuilder: FormBuilder,
    private ngxEditorjsService: NgxEditorjsService
  ) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(data => console.log({ data }));

    this.ngxEditorjsService.adjustBlockPostion$
    .subscribe((direction: AdjustBlockPostionActions) => console.log({ direction }));

    this.ngxEditorjsService.addNewBlock$
    .subscribe((block: any) => console.log({ block }));
  }
}
