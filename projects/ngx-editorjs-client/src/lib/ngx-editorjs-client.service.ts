import { Inject, InjectionToken, Optional } from '@angular/core';
import { Type } from '@angular/core';
import { Injectable } from '@angular/core';


export const NGX_EDITORJS_CLIENT_OPTIONS = new InjectionToken<NgxEditorjsOptions>('NGX_EDITORJS_CLIENT_OPTIONS');
@Injectable({
  providedIn: 'root'
})
export class NgxEditorjsClientService {

  constructor(@Optional() @Inject(NGX_EDITORJS_CLIENT_OPTIONS) options: NgxEditorjsOptions) {
    this.blocks = options?.blocks || [];
  }

  blocks: SearchableBlock[];
}

export interface NgxEditorjsOptions {
  blocks?: SearchableBlock[];
}

export interface SearchableBlock {
  name: string;
  component: Type<unknown> | null;
  componentInstanceName?: string;
  type?: string;
}

export interface NgxEditorjsOutputBlock {
  blockId: string;
  sortIndex: number;
  componentInstanceName: string;
  dataClean: string;
  savedAction?: string;
}

export interface CreateBlockAction {
  blockId: string | null;
  componentInstanceName: string;
  component: Type<unknown> | null;
  value?: string;
  componentSortIndex?: number;
  savedAction?: string;
}

export declare interface BaseClientBlock {
  value: string;
  savedAction: string;
}

export interface SearchableBlock {
  name: string;
  component: Type<unknown> | null;
  componentInstanceName?: string;
  type?: string;
}