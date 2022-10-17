import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-ngx-editorjs-header-client-block',
  template: `
    <ng-container [ngSwitch]="whichHeader">
        <h2 *ngSwitchCase="'h2'" class="flex-spacer" [innerHTML]="value"></h2>
        <h3 *ngSwitchCase="'h3'" class="flex-spacer" [innerHTML]="value"></h3>
        <h4 *ngSwitchCase="'h4'" class="flex-spacer" [innerHTML]="value"></h4>
        <h5 *ngSwitchCase="'h5'" class="flex-spacer" [innerHTML]="value"></h5>
        <h6 *ngSwitchCase="'h6'" class="flex-spacer" [innerHTML]="value"></h6>
        <h1 *ngSwitchDefault class="flex-spacer" [innerHTML]="value"></h1>
    </ng-container>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule
  ],
})
export class NgxEditorjsHeaderClientBlockComponent {

  @Input() value = '';

  whichHeader!: string
  @Input() 
  set savedAction(action: string) {
    this.whichHeader = action;
  }
}
