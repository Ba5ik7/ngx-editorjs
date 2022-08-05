import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
