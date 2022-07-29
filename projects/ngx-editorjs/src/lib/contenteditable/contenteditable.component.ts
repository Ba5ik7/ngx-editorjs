import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'contenteditable',
  templateUrl: './contenteditable.component.html',
  styleUrls: ['./contenteditable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// Need to set this up before starting
// https://medium.com/its-tinkoff/controlvalueaccessor-and-contenteditable-in-angular-6ebf50b7475e
export class ContenteditableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
