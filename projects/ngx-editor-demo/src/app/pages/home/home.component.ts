import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  requestValue = new Subject<boolean>();

  // ngxOnInitForm(ngxEditorjsFormGroup: any): void {
    // ngxEditorjsFormGroup.valueChanges
    // .subscribe((value: FormGroup) => console.log({ value }));
  // }

  getValue(): void {
    this.requestValue.next(true);
  }

  valueRequested(value: any): void {
    console.log({ value });
  }
}
