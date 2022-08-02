import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseBlockComponent } from '../../base-block/base-block.component';

@Component({
  selector: '[header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseBlockComponent implements OnInit {

  @Input('formControlName') formControlName!: string
  constructor() {
    super();
    console.log('Hello sub');
  }

  override ngOnInit(): void {
    console.log({
      sub: 'SUB'
    });
  }

}
