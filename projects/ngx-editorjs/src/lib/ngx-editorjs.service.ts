import { Inject, Injectable, InjectionToken, Optional, Type, ViewRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

export const NGX_EDITORJS_OPTIONS = new InjectionToken<NgxEditorjsOptions>('NGX_EDITORJS_OPTIONS');
export interface NgxEditorjsOptions {
  blocks?: SearchableBlock[];
}

export enum AdjustBlockPostionActions {
  UP = 'UP',
  DOWN = 'DOWN',
  DELETE = 'DELETE'
}

export interface AdjustBlockPostion {
  action: AdjustBlockPostionActions;
  viewRef: ViewRef;
}

export interface BlockMediatorComponent {
  id: string;
  sortIndex: number;
  viewRef: ViewRef;
  form: FormGroup;
  formControlName: string;
}

export interface SearchableBlock {
  name: string;
  component: Type<unknown> | null;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgxEditorjsService {

  blocks: SearchableBlock[];

  constructor(@Optional() @Inject(NGX_EDITORJS_OPTIONS) options: NgxEditorjsOptions) {
    this.blocks = options?.blocks || [];
  }

  toolbarComponentDetachSubject = new Subject<boolean>();
  toolbarComponentDetach$: Observable<boolean> = this.toolbarComponentDetachSubject.asObservable();

  adjustBlockPostionSubject = new Subject<AdjustBlockPostion>();
  adjustBlockPostion$: Observable<AdjustBlockPostion> = this.adjustBlockPostionSubject.asObservable();

  addNewBlockSubject = new Subject<SearchableBlock>();
  addNewBlock$: Observable<SearchableBlock> = this.addNewBlockSubject.asObservable();
}
