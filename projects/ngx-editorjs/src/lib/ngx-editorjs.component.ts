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

  exampleModuleFactory: ɵNgModuleFactory<any> | null = null;
  exampleComponentType: Type<any> | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private ngxEditorjsService: NgxEditorjsService
  ) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(data => console.log({ data }));

    this.ngxEditorjsService.adjustBlockPostion$
    .subscribe((direction: AdjustBlockPostionActions) => console.log({ direction }));

    this.ngxEditorjsService.addNewBlock$
    .subscribe((block) => this.addNewBlock(block));

    this.loadBlockModules();
  }

  addNewBlock(block: SearchableBlock): void {
    // Add control to form group
    this.controlName++;
    this.formGroup.addControl(
      this.controlName.toString(),
      this.formBuilder.control('', [])
    );
    // Create component
    const componentRef = this.ngxEditor.createComponent(CVAMediatorComponent);

    const fieldComponent = componentRef.instance as FormComponent;
    fieldComponent.formControlName = this.controlName.toString();
    fieldComponent.form = this.formGroup;
  }

  async loadBlockModules(): Promise<void> {
    // Import modules here
    const moduleExports: any = await import(
      /* webpackExclude: /\.map$/ */
    '@tmdjr/ngx-editor-paragraph-block/esm2020/' + this.ngxEditorjsService.blocks[0].type);

    console.log({
      typeof: typeof moduleExports,
      moduleExports
    });
    
    this.exampleComponentType = moduleExports['NgxEditorParagraphBlockComponent'];
    const componentRef = this.ngxEditor.createComponent(this.exampleComponentType as Type<unknown>);
    // this.exampleModuleFactory = new ɵNgModuleFactory(moduleExports['NgxEditorParagraphBlockComponent']);
    // console.log({ exampleModuleFactory: this.exampleModuleFactory, exampleComponentType: this.exampleComponentType });
    
  }
}
