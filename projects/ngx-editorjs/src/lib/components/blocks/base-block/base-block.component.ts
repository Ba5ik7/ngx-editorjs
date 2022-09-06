import { Component, OnInit, ChangeDetectionStrategy, Self, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({ template: '' })
export class BaseBlockComponent implements ControlValueAccessor, OnInit {

  isActive: boolean = false;
  error: string = '';
  escalateMsg: boolean = true;
  value: string = '';
  disabled: boolean = false;
  valid: boolean = true;

  viewChild!: ElementRef;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    this.controlDir.valueChanges?.subscribe((val) => this.valueChange(val));    
  }

  valueChange(value: string): void {
    this.valid = this.controlDir.control?.status !== 'INVALID';
    if(this.valid === false) {
      console.log('NOT VALID');
    }
  }

  writeValue(value: string): void {
    console.log(this.value);
    this.value = value ? value : '';
    console.log(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur(event: InputEvent) {
    this.isActive = event.data !== '';
    this.escalateMsg = this.valid === false;
    this.onTouched();
  }

  onFocus() {
    this.isActive = true;
    this.escalateMsg = false;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @HostListener('input')
  onInput() {
    this.onChange(this.viewChild.nativeElement.innerHTML);
  }

  onTouched = () => {};

  onChange: (value: string) => void = () => {};
}
