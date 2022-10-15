import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'inline-toolbar-block',
  templateUrl: './inline-toolbar-block.component.html',
  styleUrls: ['./inline-toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineToolbarBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
