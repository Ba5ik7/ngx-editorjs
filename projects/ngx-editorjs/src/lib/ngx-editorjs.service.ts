import { ComponentRef, Inject, Injectable, InjectionToken, Optional, Type, ViewRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

export const NGX_EDITORJS_OPTIONS = new InjectionToken<NgxEditorjsOptions>('NGX_EDITORJS_OPTIONS');
@Injectable({
  providedIn: 'root'
})
export class NgxEditorjsService {

  blocks: SearchableBlock[];

  requestValue!: Subject<boolean>;

  constructor(@Optional() @Inject(NGX_EDITORJS_OPTIONS) options: NgxEditorjsOptions) {
    this.blocks = options?.blocks || [];
  }

  toolbarComponentDetachSubject = new Subject<boolean>();
  toolbarComponentDetach$: Observable<boolean> = this.toolbarComponentDetachSubject.asObservable();

  adjustBlockPositionSubject = new Subject<AdjustBlockPosition>();
  adjustBlockPosition$: Observable<AdjustBlockPosition> = this.adjustBlockPositionSubject.asObservable();

  addNewBlockSubject = new Subject<CreateBlockAction>();
  addNewBlock$: Observable<CreateBlockAction> = this.addNewBlockSubject.asObservable();
  
}

// Create interface for NgxEditorjsValue
export interface NgxEditorjsValue {
  time: number;
  blocks: Block[];
  version: string;
}

// Create interface for Block
export interface Block {
  sortIndex: number;
  componentRef: ComponentRef<unknown>;
  dataClean: string;
}

export interface NgxEditorjsOptions {
  blocks?: SearchableBlock[];
}

export enum AdjustBlockPositionActions {
  UP = 'UP',
  DOWN = 'DOWN',
  DELETE = 'DELETE'
}

export interface AdjustBlockPosition {
  id: string;
  action: AdjustBlockPositionActions;
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

export interface CreateBlockAction {
  component: Type<unknown> | null;
  viewRef: ViewRef | null;
}