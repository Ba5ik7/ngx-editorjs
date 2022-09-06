import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';

@Component({
  selector: 'ejs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('header') element!: ElementRef;

  override ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.viewChild = this.element;
  }

}
