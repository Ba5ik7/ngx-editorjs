import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
}
