import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { BaseBlockComponent } from './components/blocks/base-block/base-block.component';


export const NGX_EDITORJS_OPTIONS = new InjectionToken<NgxEditorjsOptions>('NGX_EDITORJS_OPTIONS');
export interface NgxEditorjsOptions {
  blocks?: SearchableBlock[];
}

// Lives here Just for now(debugging)
export enum AdjustBlockPostionActions {
  UP = 'UP',
  DOWN = 'DOWN',
  DELETE = 'DELETE'
}

export interface SearchableBlock {
  name: string;
  type: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class NgxEditorjsService {

  blocks: SearchableBlock[];

  constructor(@Optional() @Inject(NGX_EDITORJS_OPTIONS) options: NgxEditorjsOptions) {    
    this.blocks = options?.blocks || [];
  }

  // Lives here Just for now(debugging)
  toolbarComponentDetachSubject = new Subject<boolean>();
  toolbarComponentDetach$: Observable<boolean> = this.toolbarComponentDetachSubject.asObservable();

  // Lives here Just for now(debugging)
  adjustBlockPostionSubject = new Subject<AdjustBlockPostionActions>();
  adjustBlockPostion$: Observable<AdjustBlockPostionActions> = this.adjustBlockPostionSubject.asObservable();


  // Lives here Just for now(debugging)
  addNewBlockSubject = new Subject<SearchableBlock>();
  addNewBlock$: Observable<SearchableBlock> = this.addNewBlockSubject.asObservable();
}
