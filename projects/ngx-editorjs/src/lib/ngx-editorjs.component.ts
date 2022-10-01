import { Component, OnInit, Type, ViewChild, ViewContainerRef, ɵNgModuleFactory } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CVAMediatorComponent, FormComponent } from './components/cvamediator/cvamediator.component';
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
    .subscribe((block) => block.type === 'HEADER' ? this.addHeaderBlock() : this.loadBlockModules(block));
  }

  addNewControl(): void {
    this.controlName++;
    this.formGroup.addControl(this.controlName.toString(), this.formBuilder.control('', []));
  }

  addHeaderBlock(): void {
    const componentRef = this.ngxEditor.createComponent(CVAMediatorComponent);
    const fieldComponent = componentRef.instance as FormComponent;
    fieldComponent.formControlName = this.controlName.toString();
    fieldComponent.form = this.formGroup;
  }

  async loadBlockModules({ esm2020Path, componentName }: SearchableBlock): Promise<void> {
    const moduleExports: { [key: string]: unknown } = await import(
      /* webpackExclude: /\.map$/ */
    `@tmdjr/ngx-editorjs-paragraph-block/esm2020/${esm2020Path}`);

    const blockComponentType = moduleExports[componentName!];
    const componentRef = this.ngxEditor.createComponent(blockComponentType as Type<unknown>);
    const fieldComponent = componentRef.instance as FormComponent;
    fieldComponent.formControlName = this.controlName.toString();
    fieldComponent.form = this.formGroup; 
  }
}
