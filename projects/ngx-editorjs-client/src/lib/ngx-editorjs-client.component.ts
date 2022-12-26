import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgxEditorjsHeaderClientBlockComponent } from './components/ngx-editorjs-header-client-block/ngx-editorjs-header-client-block.component';
import { BaseClientBlock, CreateBlockAction, NgxEditorjsClientService, NgxEditorjsOutputBlock, SearchableBlock } from './ngx-editorjs-client.service';


export const HeaderSearchableBlock: SearchableBlock = {
  name: 'Header',
  component: NgxEditorjsHeaderClientBlockComponent,
  componentInstanceName: 'NgxEditorjsHeaderBlockMediator',
};

@Component({
  selector: 'ngx-editorjs-client',
  template: `<ng-container #ngxEditorClient></ng-container>`,
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
    this.ngxEditorjsClientService.blocks.unshift(HeaderSearchableBlock);
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
    const blockMediator = componentRef.instance as BaseClientBlock;
    blockMediator.value = value!;
    blockMediator.savedAction = savedAction!;
  };

}
