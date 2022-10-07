import { Component, ChangeDetectionStrategy, Input, ViewRef } from '@angular/core';
import { AdjustBlockPostionActions, NgxEditorjsService } from '../../../ngx-editorjs.service';
@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent {

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
  
  adjustBlockPostion(action: AdjustBlockPostionActions) {
    this.ngxEdotorjsService.adjustBlockPostionSubject.next({ viewRef: this.viewRef, action });
    this.closeLists();
  }

  closeLists() {
    this.openBlocks = false;
    this.openBlocksOption = false;
  }
}
