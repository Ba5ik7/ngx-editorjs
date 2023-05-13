import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';


@Component({
  selector: 'mermaid-config',
  standalone: true,
  imports: [
    CommonModule,
    CodemirrorModule,
    FormsModule,
    MatButtonModule
  ],
  template: `
    <div class="container">
    <ngx-codemirror
      (ngModelChange)="changeValue($event)"
      [ngModel]="value"
      [options]="codeMirrorOptions">
    </ngx-codemirror>
    </div>
    <div class="action-group">
      <button mat-flat-button color="accent" type="button" (click)="updateMermaid()">Update</button>
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      margin: 16px auto;
      position: relative;
      z-index: 1;
    }
    :host .action-group {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    :host .answers-action-group {
      padding-bottom: 20px;
    }
    :host ::ng-deep .CodeMirror{
      height:250px
    }
    .container {
      padding-bottom: 20px;
    }
  `]
})
export class MermaidConfigComponent {  
  codeMirrorOptions ={ 
    lineNumbers: true,
    theme: 'material-palenight',
    mode: 'text/typescript',
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
  }

  @Input() value: string = '';
  @Output() mermaidValue = new EventEmitter<string>();

  changeValue(newValue: string) {
    this.value = newValue;
  }

  updateMermaid() {
    this.mermaidValue.emit(this.value);
  }
}
