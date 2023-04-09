import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mermaid-config',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="mermaid-block-modal" >
      <form [formGroup]="mermaidConfigForm">
        <h2 mat-dialog-title>Mermaid Configurations</h2>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Title</mat-label>
          <input #title matInput type="text" formControlName="title" />
          <mat-error *ngIf="mermaidConfigForm.get('title')?.errors">{{mermaidConfigFormErrorMessages['title']}}</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Mark Down</mat-label>
          <input #url matInput type="text" title="URL" formControlName="url" />
          <mat-error *ngIf="mermaidConfigForm.get('url')?.errors">{{mermaidConfigFormErrorMessages['url']}}</mat-error>
        </mat-form-field>
        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateMermaid()" [disabled]="mermaidConfigForm.invalid">Save</button>
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
export class MermaidConfigComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  destory: Subject<boolean> = new Subject();
  
  mermaidObject: any;

  errorMessages: { [key: string]: string } = {
    required: 'Required',
  };

  mermaidConfigFormErrorMessages: { [key: string]: string } = {
    url: '', title: ''
  }

  mermaidConfigForm!: FormGroup;

  @Input() value: { url: string, title: string } = { url: '', title: '' };

  @Output() mermaidValue = new EventEmitter<{ url: string, title: string }>();


  ngOnInit(): void {
    this.mermaidConfigForm = this.formBuilder.group({
      url: [this.value.url ?? '', [Validators.required]],
      title: [this.value.title ?? '', [Validators.required]]
    });

    this.mermaidConfigForm.statusChanges
    .pipe(takeUntil(this.destory))
    .subscribe(() => this.setErrorsMessages(this.mermaidConfigForm, this.mermaidConfigFormErrorMessages));
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

  updateMermaid() {
    this.mermaidValue.emit(this.mermaidConfigForm.value);
  }

  closeConfig() {
    this.mermaidValue.emit(this.value);
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
