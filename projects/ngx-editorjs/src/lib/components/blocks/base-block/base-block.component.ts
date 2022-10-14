import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import {
  Component,
  OnInit,
  Self,
  HostListener,
  ElementRef,
  ApplicationRef,
  Injector,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  ViewRef,
  OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
import { BlockOptionAction, NgxEditorjsService } from '../../../ngx-editorjs.service';
import { ToolbarBlockComponent } from '../toolbar-block/toolbar-block.component';

@Component({ template: '' })
export class BaseBlockComponent implements ControlValueAccessor, OnInit, OnDestroy {
  destory: Subject<boolean> = new Subject();

  @Input() blockId!: string;
  @Input() 
  set savedAction(action: string) {
    this.handleBlockOptionAction(action);
  }

  blockOptionActions: BlockOptionAction[] | undefined;
   
  isActive: boolean = false;
  error: string = '';
  escalateMsg: boolean = true;
  value: string = '';
  disabled: boolean = false;
  valid: boolean = true;

  basePortalOutlet = new DomPortalOutlet(
    this.viewContainerRef.element.nativeElement,
    this.componentFactoryResolver,
    this.appRef,
    this.injector
  );

  viewChild!: ElementRef;

  toolbarBlockPortal!: ComponentPortal<ToolbarBlockComponent>;

  constructor(
    @Self() public controlDir: NgControl,
    private appRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ngxEdotorjsService: NgxEditorjsService
  ) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    this.controlDir.valueChanges?.subscribe((val) => this.valueChange(val));    
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

  valueChange(value: string): void {
    this.valid = this.controlDir.control?.status !== 'INVALID';
  }

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur(event?: InputEvent) {
    this.isActive = event?.data !== '';
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

  onTouched = () => {};

  onChange: (value: string) => void = () => {};

  @HostListener('input')
  onInput() {
    this.onChange(this.viewChild.nativeElement.innerHTML);
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(event?: Event) {    
    if(!this.basePortalOutlet.hasAttached()) {
      this.ngxEdotorjsService.toolbarComponentDetachSubject.next(true);

      this.toolbarBlockPortal = new ComponentPortal(ToolbarBlockComponent);
      const toolbarComponent = this.basePortalOutlet.attach(this.toolbarBlockPortal);
      toolbarComponent.instance.blockId = this.blockId;
      toolbarComponent.instance.blockOptionActions = this.blockOptionActions;
      toolbarComponent.instance.handleBlockOptionActionEmitter
      .pipe(takeUntil(this.destory))
      .subscribe((action: string) => this.handleBlockOptionAction(action));

      this.ngxEdotorjsService.toolbarComponentDetach$
      .pipe(take(1))
      .subscribe(() => this.detachToolbarComponent())
    }
  }

  detachToolbarComponent() {
    this.basePortalOutlet.detach();
  }

  @HostListener('paste', ['$event'])
  onPaste(event?: Event) {
    event?.preventDefault();
    const text = (event as ClipboardEvent).clipboardData?.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  }

  handleBlockOptionAction(action: string) { }
}
