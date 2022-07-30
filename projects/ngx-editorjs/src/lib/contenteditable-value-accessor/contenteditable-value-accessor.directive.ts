import { HostListener, ElementRef, Renderer2, forwardRef, Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Directive({
  selector:
    '[contenteditable][formControlName],' +
    '[contenteditable][formControl],' +
    '[contenteditable][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContenteditableValueAccessor),
      multi: true,
    },
  ]
})
// Need to set this up before starting
// https://medium.com/its-tinkoff/controlvalueaccessor-and-contenteditable-in-angular-6ebf50b7475e
export class ContenteditableValueAccessor implements ControlValueAccessor {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  private onTouched = () => {};

  private onChange: (value: string) => void = () => {};
  
  registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }
  
  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  @HostListener('input')
  onInput() {
    this.onChange(this.elementRef.nativeElement.innerHTML);
  }
  
  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }
  
  setDisabledState(disabled: boolean) {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'contenteditable',
      String(!disabled),
    );
  }
  
  writeValue(value: string) {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      value,
    );
  }

}
