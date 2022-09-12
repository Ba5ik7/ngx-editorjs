import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdjustBlockPostionActions, NgxEditorjsService } from '../../../../ngx-editorjs.service';

@Component({
  selector: 'block-options-list',
  templateUrl: './block-options-list.component.html',
  styleUrls: ['./block-options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOptionsListComponent {

  options = ['1','2','3','4','5','6'];

  constructor(private ngxEdotorjsService: NgxEditorjsService) { }

  adjustBlockPostionUp() {
    this.ngxEdotorjsService.adjustBlockPostionSubject.next(AdjustBlockPostionActions.UP);
  }

  adjustBlockPostionDelete() {
    this.ngxEdotorjsService.adjustBlockPostionSubject.next(AdjustBlockPostionActions.DELETE);
  }

  adjustBlockPostionDown() {
    this.ngxEdotorjsService.adjustBlockPostionSubject.next(AdjustBlockPostionActions.DOWN);
  }
}
