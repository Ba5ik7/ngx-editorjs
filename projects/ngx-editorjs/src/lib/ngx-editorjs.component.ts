import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, concatMap, forkJoin, from, map, of, Subject, tap } from 'rxjs';
import { NgxEditorjsHeaderBlockMediator } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.mediator';
import { AdjustBlockPosition, AdjustBlockPositionActions, Block, BlockMediatorComponent, CreateBlockAction, NgxEditorjsService, NgxEditorjsValue } from './ngx-editorjs.service';

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
  @Output() valueRequested = new EventEmitter<number>();

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
      this.createNgxEditorjsBlock({ viewRef: null, component: NgxEditorjsHeaderBlockMediator });
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

  createNgxEditorjsBlock({ viewRef, component }: CreateBlockAction): void {
    const controlName = Math.random().toString(36).slice(2);
    const sortIndex = viewRef ? this.ngxEditor.indexOf(viewRef) + 1 : 0;

    this.formGroup.addControl(controlName, this.formBuilder.control('', []));
    
    const componentRef = this.ngxEditor.createComponent(component!);
    this.ngxEditor.move(componentRef.hostView, sortIndex);

    const fieldComponent = componentRef.instance as BlockMediatorComponent;
    fieldComponent.id = controlName;
    fieldComponent.sortIndex = sortIndex;
    fieldComponent.viewRef = componentRef.hostView;
    fieldComponent.form = this.formGroup;
    fieldComponent.formControlName = controlName;

    this.blockControlMap.set(controlName, { sortIndex, componentRef: componentRef, dataClean: '' });
    console.log({
      blockControlMap: this.blockControlMap,
    });
  }

  moveNgxEditorjsBlock({ id, viewRef, action }: AdjustBlockPosition): void {
    const sortIndex = this.ngxEditor.indexOf(viewRef);
    const newSortIndex = action === AdjustBlockPositionActions.UP ? sortIndex - 1 : sortIndex + 1;
    const inRange =  newSortIndex >= 0 && newSortIndex <= this.ngxEditor.length - 1;
    this.ngxEditor.move(viewRef, inRange ? newSortIndex : sortIndex);
    this.blockControlMap.get(id)!.sortIndex = newSortIndex;
    console.log({
      blockControlMap: this.blockControlMap,
    });
  }

  deleteNgxEditorjsBlock({ id, viewRef }: AdjustBlockPosition): void {
    const index = this.ngxEditor.indexOf(viewRef);    
    if (this.ngxEditor.length - 1 !== 0) {
      this.blockControlMap.delete(id);
      this.ngxEditor.remove(index);
    }
  }

  parentRequestCurrentValue(): void {
    console.log({
      test: this.ngxEditor.get(0)
    });
    
    from(Array(this.ngxEditor.length))
    .pipe(
      tap((value) => { console.log(value) }),
      map((_, index) => ({
        type: this.ngxEditor.get(index),
        name: this.ngxEditor.get(index)
      }))
    )
    .subscribe((block: any) => {
      console.log({
        block
      });
    });



    // Array(this.ngxEditor.length).forEach((_, index) => {
    //   const block = this.ngxEditor.get(index);
    //   console.log({
    //     block
    //   });
    // });

    // Loop over all ViewRefs in ngxEditorjs VeiwcontainerRef
    // Create a new Block object for each ViewRef
    // Push Block object to blocks array
    // Emit blocks array
    // const blocks: any[] = [];
    // this.ngxEditor.forEach((viewRef) => {
    //   const block = {
    //     id: viewRef.context.id,
    //     sortIndex: viewRef.context.sortIndex,
    //     formControlName: viewRef.context.formControlName,
    //     form: viewRef.context.form
    //   };
    //   blocks.push(block);
    // });

    // Get current formGroup value and pipe into NgxEditorjsValue
  //   const value = this.formGroup.value;
  //   const ngxEditorjsValue = {
  //     time: Date.now(),
  //     blocks: Object.keys(value).map((key) => {
  //       return {
  //         type: 'header',
  //         dataClean: value[key]
  //       }
  //     }),
  //     version: '0.0.1'
  //   };
  //   this.valueRequested.emit(ngxEditorjsValue);
  // }
    this.valueRequested.emit(this.formGroup.value);
  }
}
