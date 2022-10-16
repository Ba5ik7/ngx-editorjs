import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'inline-toolbar-block',
  templateUrl: './inline-toolbar-block.component.html',
  styleUrls: ['./inline-toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineToolbarBlockComponent implements OnInit {

  @Input() selection!: Selection;

  @Output('closeInlineToobarOverlay') closeInlineToobarOverlayEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  closeInlineToobarOverlay() {
    this.closeInlineToobarOverlayEmitter.emit();
  }

  addInlineTag(tag: string) {
    // console.log({ selection: this.selection });
    // Get selection range replace with bold text
    const range = this.selection.getRangeAt(0);
    const boldText = document.createElement(tag);
    boldText.innerHTML = range.toString();
    range.deleteContents();
    range.insertNode(boldText);
    // console.log({ test: this.selection?.toString() });
    this.closeInlineToobarOverlay();
  }
}
