import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewRef } from '@angular/core';
import { AdjustBlockPostionActions } from '../../../../ngx-editorjs.service';

@Component({
  selector: 'block-options-list',
  templateUrl: './block-options-list.component.html',
  styleUrls: ['./block-options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOptionsListComponent {

  readonly AdjustBlockPostionActions = AdjustBlockPostionActions;

  @Output('adjustBlockPostion') adjustBlockPostionEmitter = new EventEmitter();

  options = ['1','2','3','4','5','6'];

  constructor() { }

  adjustBlockPostion(action: AdjustBlockPostionActions) {
    this.adjustBlockPostionEmitter.emit(action);
  }
}
