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
  OnDestroy
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { merge, Subject, take, takeUntil } from 'rxjs';
import { BlockOptionAction, NgxEditorjsService } from '../../../ngx-editorjs.service';
import { ToolbarBlockComponent } from '../toolbar-block/toolbar-block.component';
import { InlineToolbarBlockComponent } from '../inline-toolbar-block/inline-toolbar-block.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

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
  overlayRef!: OverlayRef;

  constructor(
    @Self() public controlDir: NgControl,
    private appRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ngxEdotorjsService: NgxEditorjsService,
    private overlay: Overlay
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

  @HostListener('mouseup', ['$event.target'])
  onMouseUp(event: Event) {
    this.checkToDisplayInlineToolbarBlock();
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(event: Event) {    
    this.removeAndAddToolbarBlock();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: Event) {
    event.preventDefault();
    const text = (event as ClipboardEvent).clipboardData!.getData('text/plain');
    document.execCommand('insertHTML', false, text);
  }

  removeAndAddToolbarBlock() {
    if(!this.basePortalOutlet.hasAttached()) {
      this.ngxEdotorjsService.toolbarComponentDetachSubject.next(true);

      this.toolbarBlockPortal = new ComponentPortal(ToolbarBlockComponent);
      const toolbarComponent = this.basePortalOutlet.attach(this.toolbarBlockPortal);
      
      toolbarComponent.instance.blockId = this.blockId;
      toolbarComponent.instance.blockOptionActions = this.blockOptionActions;

      toolbarComponent.instance.handleBlockOptionActionEmitter
      .pipe(takeUntil(this.destory))
      .subscribe((action: string) => {
        this.ngxEdotorjsService.updateBlockOptionActionSubject.next({ blockId: this.blockId, action });
        this.handleBlockOptionAction(action);
      });

      this.ngxEdotorjsService.toolbarComponentDetach$
      .pipe(take(1))
      .subscribe(() => this.detachToolbarComponent())
    }
  }

  // Override this method in child component
  handleBlockOptionAction(action: string) { }

  detachToolbarComponent() {
    this.basePortalOutlet.detach();
    // this.viewContainerRef.remove(0);
  }

  checkToDisplayInlineToolbarBlock() {
    const selection = window.getSelection();
    if(selection && selection.toString() !== '') {
      const range = selection.getRangeAt(0);
      const selectionRect = range.getBoundingClientRect();
      // console.log({
      //   event,
      //   selection,
      //   selectionText: selection?.toString(),
      //   range,
      //   selectionRect
      // });

      this.overlayRef = this.overlay.create({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        positionStrategy: this.overlay.position()
          .flexibleConnectedTo(selectionRect!)
          .withPositions([{
            offsetY: 8,
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          }])
      });
      const inlineToolbar = this.overlayRef.attach(new ComponentPortal(InlineToolbarBlockComponent));
      inlineToolbar.instance.selection = selection;

      merge(this.overlayRef.backdropClick(), inlineToolbar.instance.closeInlineToobarOverlayEmitter)
      .pipe(take(1))
      .subscribe(() => this.overlayRef.dispose());
    }
  }
}
