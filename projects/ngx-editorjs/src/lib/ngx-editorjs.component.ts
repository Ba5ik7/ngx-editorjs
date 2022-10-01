import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormComponent } from './components/cvamediator/cvamediator.component';
import { AdjustBlockPostionActions, NgxEditorjsService, SearchableBlock } from './ngx-editorjs.service';

@Component({
  selector: 'ngx-editorjs',
  templateUrl: './ngx-editorjs.component.html',
  styleUrls: ['ngx-editorjs.component.scss']
})

export class NgxEditorjsComponent implements OnInit {

  @ViewChild('ngxEditor', { read: ViewContainerRef }) ngxEditor!: ViewContainerRef;
  controlName: number = 0;
  formGroup: FormGroup = this.formBuilder.group({
    [this.controlName.toString()]: this.formBuilder.control('', [])
  });

  constructor(
    private formBuilder: FormBuilder,
    private ngxEditorjsService: NgxEditorjsService
  ) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(data => console.log({ data }));

    this.ngxEditorjsService.adjustBlockPostion$
    .subscribe((direction: AdjustBlockPostionActions) => console.log({ direction }));

    this.ngxEditorjsService.addNewBlock$
    .subscribe((block) => {
      this.addNewControl();
      this.createComponent(block);
    });
  }

  addNewControl(): void {
    this.controlName++;
    this.formGroup.addControl(this.controlName.toString(), this.formBuilder.control('', []));
  }

  createComponent({ component }: SearchableBlock): void {
    const componentRef = this.ngxEditor.createComponent(component!);
    const fieldComponent = componentRef.instance as FormComponent;
    fieldComponent.formControlName = this.controlName.toString();
    fieldComponent.form = this.formGroup;
  }
}
