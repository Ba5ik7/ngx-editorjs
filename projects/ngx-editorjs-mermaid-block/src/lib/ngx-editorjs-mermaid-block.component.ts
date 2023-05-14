import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { MermaidConfigComponent } from './image-config/mermaid-config.component';
import mermaid from 'mermaid';
import { SafeHtmlPipe } from './pipes/shared.pipe';

mermaid.parseError = function(err: any, hash: any) {
  console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};

@Component({
  standalone: true,
  selector: 'ngx-editorjs-mermaid-block',
  template: `
  <ng-container *ngIf="_openEditMermaidOverlay; else elseTemplate">
    <mermaid-config [value]="_value" (mermaidValue)="updateMermaid($event)"></mermaid-config>
  </ng-container>
  <ng-template #elseTemplate>
    <div class="mermaid-container"> 
      <div
        #mermaidContainer
        [ngClass]="activeMermaidClass"
        [innerHTML]="_mermaidDiagramSVG | safeHtml"
        class="mermaid"></div>
      <button  
        mat-mini-fab 
        class="mermaid-block-button mat-elevation-z2"
        (click)="openEditUrlOverlay()">
          <mat-icon>edit</mat-icon>
      </button>
    </div>
  </ng-template>
  `,
  styles: [`
  :host { display: flex; flex-direction: column; position: relative; padding-bottom: 22px; }
  .mermaid { width: 100%; display: flex; }
  .mermaid:hover ~ .mermaid-block-button, .mermaid-block-button:hover {
      display: block;
    }
  .mermaid-block-button {
      position: absolute;
      top: 6px;
      left: 6px;
      z-index: 1;
      display: none;
      width: 32px;
      height: 32px; 
    }
    .mermaid-container {
      display: flex;
    }
    :host .flex-start { justify-content: flex-start; }
    :host .flex-end { justify-content: flex-end; }
    :host .center { justify-content: center; }
    :host .stretch img { width: 100%; }
  `],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MermaidConfigComponent,
    SafeHtmlPipe
  ]
})
export class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent implements OnInit {
  override useInlineToolbar = false;
  override useInputType = false;
  override useOnPasteHTMLRemoval = false;

  @ViewChild('paragraph') element!: ElementRef;
  @ViewChild('mermaidContainer') mermaidContainer!: ElementRef;

  _mermaidAPI = mermaid.mermaidAPI;
  _openEditMermaidOverlay: boolean = false;
  _value = '';
  _mermaidDiagramSVG = '';
  activeMermaidClass: string = 'flex-start';

  override blockOptionActions: { action: string, icon: string }[] = [
    { action: 'flex-start', icon: 'format_align_left' },
    { action: 'center', icon: 'format_align_center' },
    { action: 'flex-end', icon: 'format_align_right' }
  ];

  renderMermaidDiagram(mermaidDiagram: string): void {
    const uniqueId = `mermaid-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.render(uniqueId, mermaidDiagram).then(
        data => this.ngZone.run(() => this._mermaidDiagramSVG = data.svg),
        error => console.warn(`Error: ${error}`)
      );
    });
  }

  override ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.initialize({ startOnLoad: false });
    });
    if(this.value) {
      this.renderMermaidDiagram(this.value);
      this._value = this.value;
    } else {
      this.openEditUrlOverlay();
    }
    super.ngOnInit();
  }

  override changeValue(value: string) {
    super.changeValue(value);
  }

  override handleBlockOptionAction(action: string) {
    this.activeMermaidClass = action ?? 'flex-start';
    super.handleBlockOptionAction(action);
  }

  openEditUrlOverlay() {
    this._openEditMermaidOverlay = true;
  }

  updateMermaid(value: string) {
    this._value = value;
    this.renderMermaidDiagram(value);
    this.changeValue(value);
    this._openEditMermaidOverlay = false;
  }
}
