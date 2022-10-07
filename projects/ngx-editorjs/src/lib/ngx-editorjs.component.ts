import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxEditorjsHeaderBlockMediator } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.mediator';
import { AdjustBlockPosition, AdjustBlockPositionActions, BlockMediatorComponent, CreateBlockAction, NgxEditorjsService, SearchableBlock } from './ngx-editorjs.service';

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

    this.ngxEditorjsService.adjustBlockPosition$
    .subscribe((adjustBlockPosition: AdjustBlockPosition) => {
      adjustBlockPosition.action === AdjustBlockPositionActions.DELETE ? 
      this.deleteNgxEditorjsBlock(adjustBlockPosition) : this.moveNgxEditorjsBlock(adjustBlockPosition);
    });

    this.ngxEditorjsService.addNewBlock$
    .subscribe((block) => this.createNgxEditorjsBlock(block));
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.createNgxEditorjsBlock({ viewRef: null, component: null });
    });
  }

  createNgxEditorjsBlock({ viewRef, component }: CreateBlockAction): void {
    this.controlName++;
    this.formGroup.addControl(this.controlName.toString(), this.formBuilder.control('', []));

    const componentRef = this.ngxEditor.createComponent(component ?? NgxEditorjsHeaderBlockMediator);
    this.ngxEditor.move(componentRef.hostView, viewRef ? this.ngxEditor.indexOf(viewRef) + 1 : 0);

    const fieldComponent = componentRef.instance as BlockMediatorComponent;
    fieldComponent.id = 'wes';
    fieldComponent.sortIndex = 1;
    fieldComponent.viewRef = componentRef.hostView;
    fieldComponent.form = this.formGroup;
    fieldComponent.formControlName = this.controlName.toString();
  }


  moveNgxEditorjsBlock({ viewRef, action }: AdjustBlockPosition): void {
    const index = this.ngxEditor.indexOf(viewRef);
    const newIndex = action === AdjustBlockPositionActions.UP ? index - 1 : index + 1;
    const inRange =  newIndex >= 0 && newIndex <= this.ngxEditor.length - 1;
    this.ngxEditor.move(viewRef, inRange ? newIndex : index);
  }

  deleteNgxEditorjsBlock({ viewRef }: AdjustBlockPosition): void {
    const index = this.ngxEditor.indexOf(viewRef);    
    if (index !== 0) {
      this.ngxEditor.remove(index);
    }
  }
}
