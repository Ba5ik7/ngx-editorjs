import { AfterContentInit, AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[autofocus]'
})
export class AutofocusDirective implements AfterContentInit {
  _autofocus!: boolean;
  @Input() set autofocus(condition: boolean) {
    this._autofocus = condition !== false;
  }

  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit() {
    if (this._autofocus || typeof this._autofocus === 'undefined') {
      const nativeElement = this.elementRef.nativeElement;
      setTimeout(() => nativeElement.focus?.());
    }
  }
}
