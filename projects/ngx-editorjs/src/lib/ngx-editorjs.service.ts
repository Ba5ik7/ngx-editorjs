import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxEditorjsService {

  constructor() { }


  // Lives here Just for now(debugging)
  toolbarComponentDetachSubject = new Subject<boolean>();
  toolbarComponentDetach$: Observable<any> = this.toolbarComponentDetachSubject.asObservable();
}
