import { BasePortalOutlet, ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { Component, OnInit, ChangeDetectionStrategy, Self, HostListener, ElementRef, ApplicationRef, Injector, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ToolbarBlockComponent } from '../toolbar-block/toolbar-block.component';

@Component({ template: '' })
export class BaseBlockComponent implements ControlValueAccessor, OnInit {

  isActive: boolean = false;
  error: string = '';
  escalateMsg: boolean = true;
  value: string = '';
  disabled: boolean = false;
  valid: boolean = true;

  basePortalOutlet = new DomPortalOutlet(this.viewContainerRef.element.nativeElement, this.componentFactoryResolver, this.appRef, this.injector);

  viewChild!: ElementRef;

  constructor(
    @Self() public controlDir: NgControl,
    private appRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
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


  toolbarBlockPortal!: ComponentPortal<ToolbarBlockComponent>;
  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(event: Event) {
    console.log('Base onMouseEnter');
    this.toolbarBlockPortal = new ComponentPortal(ToolbarBlockComponent);
    const nextPageViewer = this.basePortalOutlet.attach(this.toolbarBlockPortal);
  }

  // detach
  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(event: Event) {
    console.log('Base onMouseLeave');
    // this.toolbarBlockPortal = new ComponentPortal(ToolbarBlockComponent);
    // this.basePortalOutlet.detach();
  }

  onTouched = () => {};

  onChange: (value: string) => void = () => {};
}
