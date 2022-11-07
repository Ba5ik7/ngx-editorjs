import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, concatMap, forkJoin, from, map, of, Subject, takeUntil, tap } from 'rxjs';
import { NgxEditorjsHeaderBlockMediator } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.mediator';
import { 
  AdjustBlockPosition,
  AdjustBlockPositionActions,
  Block,
  BlockMediatorComponent,
  CreateBlockAction,
  NgxEditorjsService,
  NgxEditorjsOutputBlock,
  SearchableBlock,
  UpdateBlockOptionAction
} from './ngx-editorjs.service';

// ['header',{ type: 'header', dataClean: '' }],
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

export const HeaderSearchableBlock: SearchableBlock = {
  name: 'Header',
  component: NgxEditorjsHeaderBlockMediator,
  componentInstanceName: 'ngxEditorjsHeaderBlockMediator',
};

@Component({
  selector: 'ngx-editorjs',
  template: `
    <form [formGroup]="formGroup">
      <ng-container #ngxEditor></ng-container>
    </form>
  `,
  styles: []
})
export class NgxEditorjsComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private ngxEditorjsService: NgxEditorjsService
  ) {}

  @Input() 
  set inputData(blocks: NgxEditorjsOutputBlock[]) {
    requestAnimationFrame(() => this.clearSortCreateNgxEditorjsBlocks(blocks));
  }

  @Input() requestValue!: Subject<boolean>;
  @Output() valueRequested = new EventEmitter<NgxEditorjsOutputBlock[]>();

  // @Output('ngxOnInitForm') ngxOnInitForm = new EventEmitter<FormGroup>();

  @ViewChild('ngxEditor', { read: ViewContainerRef, static: true }) ngxEditor!: ViewContainerRef;

  formGroup: FormGroup = this.formBuilder.group({});
  blockControlMap: Map<string, Block> = new Map();

  destroy: Subject<void> = new Subject();


  ngOnInit(): void {
    // @TODO: add a way only add on first load
    this.ngxEditorjsService.blocks.unshift(HeaderSearchableBlock);
    
    // this.ngxOnInitForm.emit(this.formGroup);
    this.requestValue
    .pipe(takeUntil(this.destroy))
    .subscribe(() => this.parentRequestCurrentValue());

    this.ngxEditorjsService.adjustBlockPosition$
    .pipe(takeUntil(this.destroy))
    .subscribe((adjustBlockPosition: AdjustBlockPosition) => {
      adjustBlockPosition.action === AdjustBlockPositionActions.DELETE ? 
      this.deleteNgxEditorjsBlock(adjustBlockPosition) : this.moveNgxEditorjsBlock(adjustBlockPosition);
    });

    this.ngxEditorjsService.addNewBlock$
    .pipe(takeUntil(this.destroy))
    .subscribe((block) => this.createNgxEditorjsBlock(block));

    this.ngxEditorjsService.updateBlockOptionAction$
    .pipe(takeUntil(this.destroy))
    .subscribe((block) => this.updateNgxEditorjsBlock(block));

    this.clearSortCreateNgxEditorjsBlocks([]);
  }

  ngOnDestroy(): void {
    // @todo: add a way only add on first load
    this.ngxEditorjsService.blocks.shift();
    this.destroy.next();
  }

  loadNgxEditorjsBlock({ blockId, component, value, savedAction }: CreateBlockAction): void {
    this.formGroup.addControl(blockId!, this.formBuilder.control(value, []));

    const componentRef = this.ngxEditor.createComponent(component!, { index: this.ngxEditor.length });
    const blockMediator = componentRef.instance as BlockMediatorComponent;
    blockMediator.blockId = blockId!;
    blockMediator.form = this.formGroup;
    blockMediator.formControlName = blockId!;      
    blockMediator.savedAction = savedAction;

    this.blockControlMap.set(blockId!, {
      sortIndex: this.ngxEditor.length - 1,
      componentRef: componentRef,
      dataClean: value!,
      savedAction
    });
  };

  createNgxEditorjsBlock({ blockId, component }: CreateBlockAction): void {
    if(!component || !blockId) return;
    const block = component ?? NgxEditorjsHeaderBlockMediator;
    const controlName = Math.random().toString(36).slice(2);
    
    let viewRef: ViewRef | undefined;
    if(blockId) viewRef = this.blockControlMap.get(blockId)!.componentRef.hostView;

    this.formGroup.addControl(controlName, this.formBuilder.control('', []));

    const sortIndex = viewRef ? this.ngxEditor.indexOf(viewRef) + 1 : 0;
    const componentRef = this.ngxEditor.createComponent(block, { index: sortIndex });
    const blockMediator = componentRef.instance as BlockMediatorComponent;
    blockMediator.blockId = controlName;
    blockMediator.form = this.formGroup;
    blockMediator.formControlName = controlName;

    this.blockControlMap.forEach((block) => { if(block.sortIndex >= sortIndex) block.sortIndex++ });
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

  updateNgxEditorjsBlock({ blockId, action }: UpdateBlockOptionAction): void {
    this.blockControlMap.forEach((block, blockIdKey) => {
      if(blockIdKey === blockId) block.savedAction = action;
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
      console.log({ componentType: block.componentRef.componentType, block });
      blocks.push({
        blockId: key,
        sortIndex: block.sortIndex,
        name: block.componentRef.componentType.name,
        dataClean: this.formGroup.get(key)?.value,
        savedAction: block.savedAction
      })
    });
    this.valueRequested.emit(blocks);
  }

  clearSortCreateNgxEditorjsBlocks(blocks: NgxEditorjsOutputBlock[]): void {
    if(blocks === undefined || blocks.length === 0 ) {
      this.createNgxEditorjsBlock({ blockId: null, component: null });
      return;
    }

    this.ngxEditor.clear();
    this.blockControlMap.clear();

    if(blocks) {
      blocks.sort((a, b) => a.sortIndex - b.sortIndex);
      blocks.forEach((block) => {
        const componentInstanceObject = 
          this.ngxEditorjsService.blocks.find((b) => b.componentInstanceName === block.name)
            ?? this.ngxEditorjsService.blocks[0];
  
        const createBlockAction: CreateBlockAction = { 
          blockId: block.blockId,
          component: componentInstanceObject?.component,
          value: block.dataClean,
          componentSortIndex: block.sortIndex,
          savedAction: block.savedAction
        };
        this.loadNgxEditorjsBlock(createBlockAction);
      });
    }
  }
}
