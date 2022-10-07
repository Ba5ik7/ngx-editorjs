import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxEditorjsHeaderBlockMediator } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.mediator';
import { AdjustBlockPostionActions, NgxEditorjsService, SearchableBlock } from './ngx-editorjs.service';

export interface FormComponent {
  form: FormGroup;
  formControlName: string;
}

@Component({
  selector: 'ngx-editorjs',
  templateUrl: './ngx-editorjs.component.html',
  styleUrls: ['ngx-editorjs.component.scss']
})
export class NgxEditorjsComponent implements OnInit, AfterViewInit {

  @Output('ngxOnInitForm') ngxOnInitForm = new EventEmitter<FormGroup>();

  @ViewChild('ngxEditor', { read: ViewContainerRef }) ngxEditor!: ViewContainerRef;

  controlName: number = 0;
  formGroup: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private ngxEditorjsService: NgxEditorjsService
  ) { }

  ngOnInit(): void {
    this.ngxOnInitForm.emit(this.formGroup);

    this.ngxEditorjsService.adjustBlockPostion$
    .subscribe((action: AdjustBlockPostionActions) => { });

    this.ngxEditorjsService.addNewBlock$
    .subscribe((block) => this.createNgxEditorjsBlock(block));
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.createNgxEditorjsBlock({ name: 'Header', component: null });
    });
  }

  createNgxEditorjsBlock({ component }: SearchableBlock): void {
    this.controlName++;
    this.formGroup.addControl(this.controlName.toString(), this.formBuilder.control('', []));

    const componentRef = this.ngxEditor.createComponent(component ?? NgxEditorjsHeaderBlockMediator);
    const fieldComponent = componentRef.instance as FormComponent;
    fieldComponent.formControlName = this.controlName.toString();
    fieldComponent.form = this.formGroup;
  }
}
