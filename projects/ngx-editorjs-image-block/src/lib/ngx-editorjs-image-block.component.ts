import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AutofocusDirective, BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { ImageConfigComponent } from './image-config/image-config.component';

@Component({
  selector: 'ngx-editorjs-image-block',
  standalone: true,
  imports: [
    CommonModule,
    AutofocusDirective,
    MatButtonModule,
    MatIconModule,
    ImageConfigComponent,
  ],
  template: `
    <div *ngIf="!_openEditUrlOverlay">
      <img 
        class="image-block"
        #image
        [src]="_value.url"
        [title]="_value.title"
        onerror="this.onerror=null;this.src='https://dummyimage.com/640x360/000/AAF'"/>
      <button  
        mat-mini-fab 
        class="image-block-button mat-elevation-z2"
        (click)="openEditUrlOverlay()">
          <mat-icon>edit</mat-icon>
      </button>
    </div>
    <image-config *ngIf="_openEditUrlOverlay" [value]="_value" (imageValue)="updateImage($event)"></image-config>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; position: relative; }

    .image-block:hover ~ .image-block-button, .image-block-button:hover {
      display: block;
    }

    .image-block-button {
      position: absolute;
      top: 6px;
      left: 6px;
      z-index: 1;
      display: none;
      width: 32px;
      height: 32px; 
    }

    ::ng-deep .image-block-button .mat-button-wrapper .mat-icon {
        font-size: 1.6rem;
    }
  `]
})
export class NgxEditorjsImageBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  override useInlineToolbar = false;
  override useInputType = false;

  @ViewChild('image') element!: ElementRef;

  _openEditUrlOverlay: boolean = false;

  _value: { url: string, title: string } = { url: '', title: '' };

  override ngOnInit() {
    !!this.value && (this._value = JSON.parse(this.value));
    !this.value && this.openEditUrlOverlay();
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.viewChild = this.element;
  }

  override changeValue(value: string) {
    super.changeValue(value);
  }

  openEditUrlOverlay() {
    this._openEditUrlOverlay = true;
  }

  updateImage(value: { url: string, title: string }) {
    this._value = value;
    this.changeValue(JSON.stringify(value));
    this._openEditUrlOverlay = false;
  }
}
