import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyFirstTimeComponent } from './components/stand-alone/my-first-time/my-first-time.component';
import { AdjustBlockPostionActions, NgxEditorjsService } from './ngx-editorjs.service';

@Component({
  selector: 'ngx-editorjs',
  templateUrl: './ngx-editorjs.component.html',
  styleUrls: ['ngx-editorjs.component.scss']
})

export class NgxEditorjsComponent implements OnInit {

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
  ) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(data => console.log({ data }));

    this.ngxEditorjsService.adjustBlockPostion$
    .subscribe((direction: AdjustBlockPostionActions) => console.log({ direction }));


    this.ngxEditorjsService.addNewBlock$
    .subscribe((block: any) => this.addBlock(block));
  }


  @ViewChild('testElement') element!: ElementRef;
  addBlock(block:any) {
    console.log({
      block
    });

    const portalHost = new DomPortalOutlet(this.element.nativeElement, this.componentFactoryResolver, this.appRef, this.injector);
    const nextPagePortal = new ComponentPortal(MyFirstTimeComponent, this.viewContainerRef);
    const nextPageViewer = portalHost.attach(nextPagePortal);
  }
}
