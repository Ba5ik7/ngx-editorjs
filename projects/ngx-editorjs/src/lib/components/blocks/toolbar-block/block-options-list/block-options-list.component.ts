import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AdjustBlockPostionActions, NgxEditorjsService } from '../../../../ngx-editorjs.service';

@Component({
  selector: 'block-options-list',
  templateUrl: './block-options-list.component.html',
  styleUrls: ['./block-options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOptionsListComponent {

  @Output('closeLists') closeListsEmitter = new EventEmitter();

  options = ['1','2','3','4','5','6'];

  constructor(private ngxEdotorjsService: NgxEditorjsService) { }

  adjustBlockPostionUp() {
    this.closeLists();
    this.ngxEdotorjsService.adjustBlockPostionSubject.next(AdjustBlockPostionActions.UP);
  }

  adjustBlockPostionDelete() {
    this.closeLists();
    this.ngxEdotorjsService.adjustBlockPostionSubject.next(AdjustBlockPostionActions.DELETE);
  }

  adjustBlockPostionDown() {
    this.closeLists();
    this.ngxEdotorjsService.adjustBlockPostionSubject.next(AdjustBlockPostionActions.DOWN);
  }

  closeLists() {
    this.closeListsEmitter.emit();
  }
}
