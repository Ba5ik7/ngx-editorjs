import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CreateBlockAction, NgxEditorjsClientService, NgxEditorjsOutputBlock } from './ngx-editorjs-client.service';

@Component({
  selector: 'ngx-editorjs-client',
  template: `Hello World!`,
  styles: [
  ]
})
export class NgxEditorjsClientComponent implements OnInit {

  constructor(private ngxEditorjsClientService: NgxEditorjsClientService) { }

  @ViewChild('ngxEditorClient', { read: ViewContainerRef, static: true }) ngxEditorClient!: ViewContainerRef;

  @Input() 
  set inputData(blocks: NgxEditorjsOutputBlock[]) {
    requestAnimationFrame(() => this.clearSortCreateNgxEditorjsBlocks(blocks));
  }

  ngOnInit(): void {
  }

  clearSortCreateNgxEditorjsBlocks(blocks: NgxEditorjsOutputBlock[]): void {
    this.ngxEditorClient.clear();
    if(blocks) {
      blocks.sort((a, b) => a.sortIndex - b.sortIndex);
      blocks.forEach((block) => {
        const componentInstanceObject = 
          this.ngxEditorjsClientService.blocks.find((b) => b.componentInstanceName === block.name)
            ?? this.ngxEditorjsClientService.blocks[0];
  
        const createBlockAction: CreateBlockAction = { 
          blockId: block.blockId,
          component: componentInstanceObject.component,
          value: block.dataClean,
          componentSortIndex: block.sortIndex,
          savedAction: block.savedAction
        };
        this.loadNgxEditorjsBlock(createBlockAction);
      });
    }
  }

  loadNgxEditorjsBlock({ component, value, savedAction }: CreateBlockAction): void {
    const componentRef = this.ngxEditorClient.createComponent(component!, { index: this.ngxEditorClient.length });
    const blockMediator = componentRef.instance as any
    blockMediator.value = value!;
    blockMediator.savedAction = savedAction;
  };

}
