import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { NgxEditorjsOutputBlock } from 'projects/ngx-editorjs/src/public-api';
import { Subject } from 'rxjs';

export const InputData: NgxEditorjsOutputBlock[] = [
  {
      "blockId": "7bot2if7dy2",
      "sortIndex": 0,
      "name": "NgxEditorjsHeaderBlockMediator",
      "dataClean": "Introduction to the Angular Docs"
  },
  {
      "blockId": "kq5kkr64lph",
      "sortIndex": 1,
      "name": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps."
  },
  {
      "blockId": "582yvclj1zf",
      "sortIndex": 2,
      "name": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects."
  },
  {
      "blockId": "3mlx2sctzo8",
      "sortIndex": 3,
      "name": "NgxEditorjsBlockquotesBlockMediator",
      "dataClean": "See the live example / download example for a working example containing the code snippets in this guide."
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  requestValue = new Subject<boolean>();
  inputData!: NgxEditorjsOutputBlock[]

  // ngxOnInitForm(ngxEditorjsFormGroup: any): void {
    // ngxEditorjsFormGroup.valueChanges
    // .subscribe((value: FormGroup) => console.log({ value }));
  // }

  ngOnInit(): void {
    this.inputData = InputData;
  }

  getValue(): void {
    this.requestValue.next(true);
  }

  valueRequested(value: any): void {
    console.log({ value });
  }
}
