import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, concatMap, forkJoin, from, map, of, Subject, tap } from 'rxjs';
import { NgxEditorjsHeaderBlockMediator } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.mediator';
import { AdjustBlockPosition, AdjustBlockPositionActions, Block, BlockMediatorComponent, CreateBlockAction, NgxEditorjsService, NgxEditorjsOutputBlock, SearchableBlock } from './ngx-editorjs.service';


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
export class NgxEditorjsComponent implements OnInit, AfterViewInit {

  @Input() inputData!: NgxEditorjsOutputBlock[] | undefined;

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
    this.ngxEditorjsService.blocks.unshift(HeaderSearchableBlock);

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
      if(this.inputData) {
        this.inputData.forEach((block) => {
          const componentInstanceObject = 
            this.ngxEditorjsService.blocks.find((b) => b.componentInstanceName === block.name)
              ?? this.ngxEditorjsService.blocks[0];
  
          const createBlockAction: CreateBlockAction = { 
            blockId: block.blockId,
            component: componentInstanceObject?.component,
            value: block.dataClean,
            componentSortIndex: block.sortIndex
          };
          this.createNgxEditorjsBlock(createBlockAction);
        });
      } else {
        this.createNgxEditorjsBlock({ blockId: null, component: null });
      }
    });
  }

  blockControlMap: Map<string, Block> = new Map();

  createNgxEditorjsBlock({ blockId, component, value, componentSortIndex }: CreateBlockAction): void {
    const block = component ?? NgxEditorjsHeaderBlockMediator;
    const controlName = Math.random().toString(36).slice(2);
    
    let viewRef: ViewRef | undefined;
    if(blockId && !value) viewRef = this.blockControlMap.get(blockId)!.componentRef.hostView;

    this.formGroup.addControl(controlName, this.formBuilder.control(value ?? '', []));

    const sortIndex = viewRef ? this.ngxEditor.indexOf(viewRef) + 1 : 0;
    const componentRef = this.ngxEditor.createComponent(block, { index: componentSortIndex ?? sortIndex });
    const blockMediator = componentRef.instance as BlockMediatorComponent;
    blockMediator.blockId = controlName;
    blockMediator.form = this.formGroup;
    blockMediator.formControlName = controlName;

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
