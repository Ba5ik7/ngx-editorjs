import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewRef } from '@angular/core';
import { AdjustBlockPositionActions } from '../../../../ngx-editorjs.service';

@Component({
  selector: 'block-options-list',
  templateUrl: './block-options-list.component.html',
  styleUrls: ['./block-options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOptionsListComponent {

  readonly AdjustBlockPositionActions = AdjustBlockPositionActions;

  @Output('adjustBlockPosition') adjustBlockPositionEmitter = new EventEmitter();

  options = ['1','2','3','4','5','6'];

  constructor() { }

  adjustBlockPosition(action: AdjustBlockPositionActions) {
    this.adjustBlockPositionEmitter.emit(action);
  }
}
