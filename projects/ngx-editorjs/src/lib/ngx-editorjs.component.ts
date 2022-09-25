import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { 
  ApplicationRef, 
  Component, 
  ComponentFactoryResolver, 
  ElementRef, 
  Injector, 
  NgModuleRef, 
  OnInit, 
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseBlockComponent } from './components/blocks/base-block/base-block.component';
import { HeaderComponent } from './components/blocks/header/header.component';
import { HeaderModule } from './components/blocks/header/header.module';
import { MyFirstTimeComponent } from './components/stand-alone/my-first-time/my-first-time.component';
import { AdjustBlockPostionActions, NgxEditorjsService } from './ngx-editorjs.service';

@Component({
  selector: 'ngx-editorjs',
  templateUrl: './ngx-editorjs.component.html',
  styleUrls: ['ngx-editorjs.component.scss']
})

export class NgxEditorjsComponent implements OnInit {

  elementRef!: ElementRef;

  formGroup: FormGroup = this.formBuilder.group({
    init: ['', []],
    one: ['', []],
    two: ['', []],
    three: ['', []]
  })

  constructor(
    private formBuilder: FormBuilder,
    private ngxEditorjsService: NgxEditorjsService,
    private appRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private ngModuleRef: NgModuleRef<HeaderModule>
  ) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(data => console.log({ data }));

    this.ngxEditorjsService.adjustBlockPostion$
    .subscribe((direction: AdjustBlockPostionActions) => console.log({ direction }));


    this.ngxEditorjsService.addNewBlock$
    .subscribe((block: any) => this.addBlock(block));

    this.ngxEditorjsService.currentlyFocusBlockElemantRef$
    .subscribe((elementRef: ElementRef) => this.elementRef = elementRef);

  }

  @ViewChild('testElement') element!: ElementRef;
  addBlock(block: any) {
    console.log({ block: this.elementRef.nativeElement.parentNode });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);
    this.viewContainerRef.createComponent<BaseBlockComponent>(componentFactory);
    
    // const portalHost = new DomPortalOutlet(this.elementRef.nativeElement.parentNode, this.componentFactoryResolver, this.appRef);
    // const nextPagePortal = new ComponentPortal(MyFirstTimeComponent, this.viewContainerRef);
    // const nextPageViewer = portalHost.attach(nextPagePortal);
  }


}
