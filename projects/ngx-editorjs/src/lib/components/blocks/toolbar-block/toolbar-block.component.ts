import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AdjustBlockPositionActions, NgxEditorjsService, SearchableBlock } from '../../../ngx-editorjs.service';
@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent {

  @Input() blockId!: string;

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

  addBlock({ component }: SearchableBlock) {
    this.ngxEdotorjsService.addNewBlockSubject.next({ blockId: this.blockId, component });
    this.closeLists();
  }

  closeLists() {
    this.openBlocks = false;
    this.openBlocksOption = false;
  }
}
