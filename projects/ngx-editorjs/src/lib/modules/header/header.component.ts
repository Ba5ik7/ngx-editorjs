import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
// import { BaseBlockComponent } from '../../base-block/base-block.component';
import { ContenteditableValueAccessor } from '../../contenteditable-value-accessor/contenteditable-value-accessor.directive';

@Component({
  selector: '[header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends ContenteditableValueAccessor implements OnInit {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit(): void {
    console.log({
      sub: 'SUB'
    });
  }
}
