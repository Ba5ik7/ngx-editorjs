import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'block-options-list',
  templateUrl: './block-options-list.component.html',
  styleUrls: ['./block-options-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockOptionsListComponent implements OnInit {

  options = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
