import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseBlockComponent } from '../../base-block/base-block.component';

@Component({
  selector: 'ejs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseBlockComponent implements OnInit {


  override ngOnInitReady() {
    console.log({
      hook: 'ngOnInitReady'
    });
  }
}
