import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, Observable, pipe, Subject, tap } from 'rxjs';
import { CVAMediatorComponent, FormComponent } from './components/cvamediator/cvamediator.component';
import { AdjustBlockPostionActions, NgxEditorjsService, SearchableBlock } from './ngx-editorjs.service';

@Component({
  selector: 'ngx-editorjs',
  templateUrl: './ngx-editorjs.component.html',
  styleUrls: ['ngx-editorjs.component.scss']
})
export class NgxEditorjsComponent implements OnInit {

  @Output('ngxOnInitForm') ngxOnInitForm = new EventEmitter<FormGroup>();
  // @Input('shouldEmitCurrentBlocks') set shouldEmitCurrentBlocks(value: boolean) {
  //   this.ngxOnInitForm.emit(this.formGroup);
  // }

  @Input() getBlocks!: Subject<boolean>;
  @Output() sizeChange = new EventEmitter();

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
    // this.formGroup.valueChanges.subscribe(data => console.log({ data }));
    this.ngxOnInitForm.emit(this.formGroup);

    this.ngxEditorjsService.adjustBlockPostion$
    .subscribe((action: AdjustBlockPostionActions) => {
      switch (action) {
        case AdjustBlockPostionActions.UP:
          this.moveBlockUp();
          break;
        case AdjustBlockPostionActions.DOWN:
          this.moveBlockDown();
          break;
        case AdjustBlockPostionActions.DELETE:
          this.deleteBlock();
          break;
        default:
          break;
      }
    });

    this.ngxEditorjsService.addNewBlock$
    .subscribe((block) => {
      this.addNewControl();
      this.createBlock(block);
    });
  }

  addNewControl(): void {
    this.controlName++;
    this.formGroup.addControl(this.controlName.toString(), this.formBuilder.control('', []));
  }

  createBlock({ component }: SearchableBlock): void {
    const componentRef = this.ngxEditor.createComponent(component ?? CVAMediatorComponent);
    const fieldComponent = componentRef.instance as FormComponent;
    fieldComponent.formControlName = this.controlName.toString();
    fieldComponent.form = this.formGroup;
  }

  deleteBlock() {
    throw new Error('Method not implemented.');
  }

  moveBlockDown() {
    throw new Error('Method not implemented.');
  }

  moveBlockUp() {
    throw new Error('Method not implemented.');
  }
}
