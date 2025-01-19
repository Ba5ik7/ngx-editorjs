import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'inline-toolbar-block',
  templateUrl: './inline-toolbar-block.component.html',
  styleUrls: ['./inline-toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class InlineToolbarBlockComponent implements OnInit {

  @Input() selection!: Selection;

  @Output('closeInlineToobarOverlay') closeInlineToobarOverlayEmitter = new EventEmitter();

  url: string = '';
  showURLInputField: boolean = false;
  savedRanges: Range[] = [];

  constructor(private readonly renderer: Renderer2) { }

  ngOnInit(): void {
  }
  
  closeInlineToobarOverlay() {
    this.closeInlineToobarOverlayEmitter.emit();
  }

  addInlineTag(tag: string, optionValue?: string | null) {
    // https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative
    document.execCommand(tag, true, optionValue!);
    this.closeInlineToobarOverlay();
  }

  addCustomInlineTag(tag: string, className?: string | null) {
    const range = this.selection.getRangeAt(0);
    const element = this.renderer.createElement(tag);
    element.className = className ?? '';
    element.innerHTML = range.toString();
    range.deleteContents();
    range.insertNode(element);
    this.closeInlineToobarOverlay();
  }

  clearTags() {
      document.execCommand('removeFormat');
      document.execCommand('unlink');
      this.closeInlineToobarOverlay();
    }

  openUrlInput() {
    this.savedRanges.push(this.selection.getRangeAt(0));
    this.showURLInputField = true;
  }

  createLink() {
    this.selection.removeAllRanges();
    this.selection.addRange(this.savedRanges.pop()!);
    document.execCommand('createLink', false, this.url);
    this.closeInlineToobarOverlay();
  }
}
