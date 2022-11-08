import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AdjustBlockPositionActions, BlockOptionAction, NgxEditorjsService, SearchableBlock } from '../../../ngx-editorjs.service';
@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent {

  @Output('handleBlockOptionAction') handleBlockOptionActionEmitter = new EventEmitter();

  @Input() blockId!: string;
  @Input() blockOptionActions: BlockOptionAction[] | undefined;

  openBlocks = false;
  openBlocksOption = false;

  constructor(private ngxEdotorjsService: NgxEditorjsService) {}
  
  openBlocksList() {
    this.openBlocks = !this.openBlocks;
  }
  
  openBlocksOptionList() {
    this.openBlocksOption = !this.openBlocksOption;
  }
  
  adjustBlockPosition(action: AdjustBlockPositionActions) {
    this.ngxEdotorjsService.adjustBlockPositionSubject.next({ blockId: this.blockId, action });
    this.closeLists();
  }

  addBlock({ componentInstanceName, component }: SearchableBlock) {
    this.ngxEdotorjsService.addNewBlockSubject.next({ blockId: this.blockId, component, componentInstanceName: componentInstanceName ?? '' });
    this.closeLists();
  }

  closeLists() {
    this.openBlocks = false;
    this.openBlocksOption = false;
  }

  handleBlockOptionAction(action: string) {
    this.handleBlockOptionActionEmitter.emit(action);
  }
}
