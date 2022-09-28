import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cva-mediator',
  templateUrl: './cvamediator.component.html',
  styleUrls: ['./cvamediator.component.scss']
})
export class CVAMediatorComponent implements FormComponent {
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}

export interface FormComponent {
  form: FormGroup;
  formControlName: string;
}