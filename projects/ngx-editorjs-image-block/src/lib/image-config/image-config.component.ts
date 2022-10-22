import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'image-config',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="image-block-modal" >
      <form [formGroup]="imageConfigForm">
        <h2 mat-dialog-title>Image Configurations</h2>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Title</mat-label>
          <input #title matInput type="text" formControlName="title" />
          <mat-error *ngIf="imageConfigForm.get('title')?.errors">{{imageConfigFormErrorMessages['title']}}</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>URL</mat-label>
          <input #url matInput type="text" title="URL" formControlName="url" />
          <mat-error *ngIf="imageConfigForm.get('url')?.errors">{{imageConfigFormErrorMessages['url']}}</mat-error>
        </mat-form-field>
        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateImage()" [disabled]="imageConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
  :host {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 22px;
   }

   :host form {
      display: flex;
      flex-direction: column;
    }

    :host form .action-group {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  `]
})
export class ImageConfigComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  destory: Subject<boolean> = new Subject();
  
  imageObject: any;

  errorMessages: { [key: string]: string } = {
    required: 'Required',
  };

  imageConfigFormErrorMessages: { [key: string]: string } = {
    url: '', title: ''
  }

  imageConfigForm!: FormGroup;

  @Input() value!: { url: string, title: string };

  @Output() imageValue = new EventEmitter<{ url: string, title: string }>();


  ngOnInit(): void {
    this.imageConfigForm = this.formBuilder.group({
      url: [this.value.url ?? '', [Validators.required]],
      title: [this.value.title ?? '', [Validators.required]]
    });

    this.imageConfigForm.statusChanges
    .pipe(takeUntil(this.destory))
    .subscribe(() => this.setErrorsMessages(this.imageConfigForm, this.imageConfigFormErrorMessages));
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

  updateImage() {
    this.imageValue.emit(this.imageConfigForm.value);
  }

  closeConfig() {
    this.imageValue.emit(this.value);
  }

  setErrorsMessages(formGroup: FormGroup, formControlMessages: { [key: string]: string }): void {
    Object.keys(formGroup.controls).forEach(element => {
      const errors = formGroup.get(element)?.errors;
      if(errors) {         
        const error = Object.keys(errors)[0];
        formControlMessages[element] = this.errorMessages[error];
      }
    });
  }
}
