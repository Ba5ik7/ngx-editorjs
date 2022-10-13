import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewRef } from '@angular/core';
import { AdjustBlockPositionActions, BlockOptionAction } from '../../../../ngx-editorjs.service';

@Component({
  selector: 'block-options-list',
  templateUrl: './block-options-list.component.html',
  styleUrls: ['./block-options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOptionsListComponent {

  @Input() blockOptionActions: BlockOptionAction[] | undefined;
  @Output('handleBlockOptionAction') handleBlockOptionActionEmitter = new EventEmitter();

  readonly AdjustBlockPositionActions = AdjustBlockPositionActions; 
  @Output('adjustBlockPosition') adjustBlockPositionEmitter = new EventEmitter();

  constructor() { }

  adjustBlockPosition(action: AdjustBlockPositionActions) {
    this.adjustBlockPositionEmitter.emit(action);
  }

  handleBlockOptionAction(action: string) {
    console.log('BlockOptionsListComponent handleBlockOptionAction', action);
    this.handleBlockOptionActionEmitter.emit(action);
  }
}
