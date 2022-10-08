import { Component, ChangeDetectionStrategy, Input, ViewRef } from '@angular/core';
import { AdjustBlockPositionActions, NgxEditorjsService, SearchableBlock } from '../../../ngx-editorjs.service';
@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent {

  @Input() id!: string;
  @Input() viewRef!: ViewRef;

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
    this.ngxEdotorjsService.adjustBlockPositionSubject.next({ id: this.id, viewRef: this.viewRef, action });
    this.closeLists();
  }

  addBlock({ component }: SearchableBlock) {
    this.ngxEdotorjsService.addNewBlockSubject.next({ viewRef: this.viewRef, component });
    this.closeLists();
  }

  closeLists() {
    this.openBlocks = false;
    this.openBlocksOption = false;
  }
}
