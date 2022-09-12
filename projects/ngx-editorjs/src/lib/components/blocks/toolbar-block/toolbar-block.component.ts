import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent {
  openBlocks = false;
  openBlocksOption = false;

  options = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ];

  constructor() {}
  
  openBlocksList() {
    this.openBlocks = !this.openBlocks;
  }
  
  openBlocksOptionList() {
    this.openBlocksOption = !this.openBlocksOption;
  }
}
