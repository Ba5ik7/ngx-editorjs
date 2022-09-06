import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent implements OnInit {
  signCtrl = new FormControl([]);
  isOpen = false;
  signs = [
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Goat',
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
  ];

  constructor() {}

  ngOnInit() { }

  openBlocksList() {
    this.isOpen = !this.isOpen;
  }
}
