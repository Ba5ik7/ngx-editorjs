import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {
  _autofocus!: boolean;
  @Input() set autofocus(condition: boolean) {
    this._autofocus = condition != false;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    if (this._autofocus || typeof this._autofocus === 'undefined') {
      this.elementRef.nativeElement.focus();      //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
    }
  }
}
