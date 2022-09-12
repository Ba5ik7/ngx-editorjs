import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BaseBlockComponent } from './components/blocks/base-block/base-block.component';

// Lives here Just for now(debugging)
export enum AdjustBlockPostionActions {
  UP = 'UP',
  DOWN = 'DOWN',
  DELETE = 'DELETE'
}

@Injectable({
  providedIn: 'root'
})
export class NgxEditorjsService {

  constructor() { }

  // Lives here Just for now(debugging)
  toolbarComponentDetachSubject = new Subject<boolean>();
  toolbarComponentDetach$: Observable<boolean> = this.toolbarComponentDetachSubject.asObservable();

  // Lives here Just for now(debugging)
  adjustBlockPostionSubject = new Subject<AdjustBlockPostionActions>();
  adjustBlockPostion$: Observable<AdjustBlockPostionActions> = this.adjustBlockPostionSubject.asObservable();


  // Lives here Just for now(debugging)
  addNewBlockSubject = new Subject<any>();
  addNewBlock$: Observable<any> = this.addNewBlockSubject.asObservable();
}
