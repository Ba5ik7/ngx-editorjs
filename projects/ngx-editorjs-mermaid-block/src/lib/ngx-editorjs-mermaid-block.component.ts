import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { AutofocusDirective, BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { MermaidConfigComponent } from './image-config/mermaid-config.component';


@Component({
  standalone: true,
  selector: 'ngx-editorjs-mermaid-block',
  template: `
    <ng-container *ngIf="_openEditMermaidOverlay; else elseTemplate">
      <mermaid-config (mermaidValue)="updateMermaid($event)"></mermaid-config>
    </ng-container>
    <ng-template #elseTemplate>
      <h1>Mermaid!</h1>
    </ng-template>
  `,
  styles: [`
  :host { display: flex; flex-direction: column; padding-bottom: 22px; }
  `],
  imports: [
    CommonModule,
    AutofocusDirective,
    MatButtonModule,
    MatIconModule,
    MermaidConfigComponent
  ]
})
export class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {
  override useInlineToolbar = false;
  override useInputType = false;

  @ViewChild('paragraph') element!: ElementRef;

  _openEditMermaidOverlay: boolean = false;

  _value: { url: string, title: string } = { url: '', title: '' };

  override blockOptionActions: { action: string, icon: string }[] = [
    { action: 'flex-start', icon: 'format_align_left' },
    { action: 'center', icon: 'format_align_center' },
    { action: 'flex-end', icon: 'format_align_right' },
    { action: 'stretch', icon: 'format_align_justify' }
  ];

  override ngOnInit() {
    !!this.value && (this._value = JSON.parse(this.value));
    !this.value && this.openEditUrlOverlay();
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.viewChild = this.element;
  }

  override changeValue(value: string) {
    super.changeValue(value);
  }

  override handleBlockOptionAction(action: string) {
    console.log('action:', action);
    super.handleBlockOptionAction(action);
  }

  openEditUrlOverlay() {
    this._openEditMermaidOverlay = true;
  }

  updateMermaid(value: { url: string, title: string }) {
    this._value = value;
    this.changeValue(JSON.stringify(value));
    this._openEditMermaidOverlay = false;
  }
}
