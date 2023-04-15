import { CommonModule } from '@angular/common';
import { Component, Input, NgZone, OnInit, Pipe, PipeTransform, inject } from '@angular/core';
import mermaid from 'mermaid';
import { SafeHtmlPipe } from './pipes/shared.pipe';

mermaid.parseError = function(err: any, hash: any) {
  console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};

@Component({
  standalone: true,
  selector: 'ngx-editorjs-mermaid-client-block',
  template: `
    <div class="mermaid-container">
      <div
        #mermaidContainer
        [ngClass]="activeMermaidClass"
        [innerHTML]="_mermaidDiagramSVG | safeHtml"
        class="mermaid"></div>
    </div>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; position: relative; padding-bottom: 22px; }
    .mermaid { width: 100%; display: flex; }
    .mermaid-container { display: flex; }
    :host .flex-start { justify-content: flex-start; }
    :host .flex-end { justify-content: flex-end; }
    :host .center { justify-content: center; }
  `],
  imports: [
    CommonModule,
    SafeHtmlPipe
  ],
})
export class NgxEditorjsMermaidClientBlockComponent implements OnInit {
  ngZone = inject(NgZone);
  _mermaidAPI = mermaid.mermaidAPI;
  _mermaidDiagramSVG = '';
  activeMermaidClass: string = 'flex-start';

  @Input()
  set value(mermaidDiagram: string) {
    const uniqueId = `mermaid-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.render(uniqueId, mermaidDiagram ?? '').then(
        data => this.ngZone.run(() => this._mermaidDiagramSVG = data.svg),
        error => console.warn(`Error: ${error}`)
      );
    });
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.initialize({ startOnLoad: false });
    });
  }

  @Input() 
  set savedAction(action: string) {
    console.log('action', action);
    
    this.activeMermaidClass = action ?? 'flex-start';
  }
}
