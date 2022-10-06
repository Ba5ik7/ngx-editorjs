import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngxOnInitForm(ngxEditorjsFormGroup: any): void {
    // ngxEditorjsFormGroup.valueChanges
    // .subscribe((value: FormGroup) => console.log({ value }));
  }
}
