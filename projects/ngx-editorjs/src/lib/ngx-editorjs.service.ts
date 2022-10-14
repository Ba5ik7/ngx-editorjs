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
export interface NgxEditorjsOutputBlock {
  blockId: string;
  sortIndex: number;
  name: string;
  dataClean: string;
  savedAction?: string;
}

// Create interface for Block
export interface Block {
  sortIndex: number;
  componentRef: ComponentRef<unknown>;
  dataClean: string;
  savedAction?: string;
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
  blockId: string;
  action: AdjustBlockPositionActions;
}

export interface BlockMediatorComponent {
  blockId: string;
  form: FormGroup;
  formControlName: string;
  savedAction?: string;
}

export interface SearchableBlock {
  name: string;
  component: Type<unknown> | null;
  componentInstanceName?: string;
  type?: string;
}

export interface CreateBlockAction {
  blockId: string | null
  component: Type<unknown> | null;
  value?: string;
  componentSortIndex?: number;
  savedAction?: string;
}

export interface BlockOptionAction {
  action: string;
  icon?: string;
  text?: string;
}