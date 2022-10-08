import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, concatMap, forkJoin, from, map, of, Subject, tap } from 'rxjs';
import { NgxEditorjsHeaderBlockMediator } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.mediator';
import { AdjustBlockPosition, AdjustBlockPositionActions, Block, BlockMediatorComponent, CreateBlockAction, NgxEditorjsService, NgxEditorjsOutputBlock } from './ngx-editorjs.service';

@Component({
  selector: 'ngx-editorjs',
  template: `
    <form [formGroup]="formGroup">
      <ng-container #ngxEditor></ng-container>
    </form>
  `,
  styles: []
})
export class NgxEditorjsComponent implements OnInit, AfterViewInit {

  @Input() requestValue!: Subject<boolean>;
  @Output() valueRequested = new EventEmitter<NgxEditorjsOutputBlock[]>();

  // @Output('ngxOnInitForm') ngxOnInitForm = new EventEmitter<FormGroup>();

  @ViewChild('ngxEditor', { read: ViewContainerRef }) ngxEditor!: ViewContainerRef;

  formGroup: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private ngxEditorjsService: NgxEditorjsService
  ) { }

  ngOnInit(): void {
    // this.ngxOnInitForm.emit(this.formGroup);
    this.requestValue.subscribe(() => this.parentRequestCurrentValue());

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
      this.createNgxEditorjsBlock({ blockId: null, component: null });
    });
  }


  blockControlMap: Map<string, Block> = new Map([
      // ['header', { type: 'header', dataClean: '' }],
      // ['paragraph', { type: 'paragraph', dataClean: '' }],
      // ['list', { type: 'list', dataClean: '' }],
      // ['image', { type: 'image', dataClean: '' }],
      // ['quote', { type: 'quote', dataClean: '' }],
      // ['code', { type: 'code', dataClean: '' }],
      // ['delimiter', { type: 'delimiter', dataClean: '' }],
      // ['raw', { type: 'raw', dataClean: '' }],
      // ['table', { type: 'table', dataClean: '' }],
      // ['linkTool', { type: 'linkTool', dataClean: '' }],
      // ['embed', { type: 'embed', dataClean: '' }],
      // ['marker', { type: 'marker', dataClean: '' }],
      // ['warning', { type: 'warning', dataClean: '' }],
      // ['checklist', { type: 'checklist', dataClean: '' }],
      // ['inlineCode', { type: 'inlineCode', dataClean: '' }],
      // ['delimiter', { type: 'delimiter', dataClean: '' }],
    ]);

  createNgxEditorjsBlock({ blockId, component }: CreateBlockAction): void {
    const block = component ?? NgxEditorjsHeaderBlockMediator;
    const controlName = Math.random().toString(36).slice(2);
    
    let viewRef: ViewRef | undefined;
    if(blockId) viewRef = this.blockControlMap.get(blockId)!.componentRef.hostView;
    const sortIndex = viewRef ? this.ngxEditor.indexOf(viewRef) + 1 : 0;

    this.formGroup.addControl(controlName, this.formBuilder.control('', []));
    
    const componentRef = this.ngxEditor.createComponent(block, { index: sortIndex });
    const fieldComponent = componentRef.instance as BlockMediatorComponent;
    fieldComponent.blockId = controlName;
    fieldComponent.form = this.formGroup;
    fieldComponent.formControlName = controlName;

    this.blockControlMap.set(controlName, { sortIndex, componentRef: componentRef, dataClean: '' });
  }

  moveNgxEditorjsBlock({ blockId, action }: AdjustBlockPosition): void {
    const viewRef = this.blockControlMap.get(blockId)!.componentRef.hostView;
    const sortIndex = this.ngxEditor.indexOf(viewRef);
    const newSortIndex = action === AdjustBlockPositionActions.UP ? sortIndex - 1 : sortIndex + 1;
    const inRange = newSortIndex >= 0 && newSortIndex <= this.ngxEditor.length - 1;
    this.ngxEditor.move(viewRef, inRange ? newSortIndex : sortIndex);

    this.blockControlMap.forEach((block) => {
      if(block.sortIndex === sortIndex) block.sortIndex = newSortIndex;
      else if(block.sortIndex === newSortIndex) block.sortIndex = sortIndex;
    });
  }

  deleteNgxEditorjsBlock({ blockId }: AdjustBlockPosition): void {
    const viewRef = this.blockControlMap.get(blockId)!.componentRef.hostView;
    const index = this.ngxEditor.indexOf(viewRef);
    if (this.ngxEditor.length - 1 !== 0) {
      this.blockControlMap.delete(blockId);
      this.ngxEditor.remove(index);
      this.blockControlMap.forEach((block) => {
        if(block.sortIndex > index) block.sortIndex--;
      });
    }
  }

  parentRequestCurrentValue(): void {
    const blocks: NgxEditorjsOutputBlock[] = [];
    this.blockControlMap.forEach((block, key) => {
      blocks.push({
        blockId: key,
        sortIndex: block.sortIndex,
        name: block.componentRef.componentType.name,
        dataClean: this.formGroup.get(key)?.value
      })
    });
    this.valueRequested.emit(blocks);
  }
}
