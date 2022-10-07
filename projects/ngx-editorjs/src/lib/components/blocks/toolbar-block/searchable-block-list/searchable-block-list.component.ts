import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxEditorjsService, SearchableBlock } from '../../../../ngx-editorjs.service';
import { combineLatest, map, Observable, of, startWith, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'searchable-block-list',
  templateUrl: './searchable-block-list.component.html',
  styleUrls: ['./searchable-block-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableBlockListComponent implements OnInit {

  @Output('addBlock') addBlockEmitter = new EventEmitter();

  blockCtrl = new FormControl([]);
  blocks!: SearchableBlock[];
  blocksDefaults: SearchableBlock[] = [
    { type: 'HeaderBlockMediator', name: 'Header', component: null },
  ];

  filter$ = this.blockCtrl.valueChanges.pipe(startWith(''));
  filteredBlocks$!: Observable<SearchableBlock[]>;
  destory: Subject<boolean> = new Subject();

  constructor(private ngxEdotorjsService: NgxEditorjsService) { }

  ngOnInit(): void {
    this.blocks = this.blocksDefaults.concat(this.ngxEdotorjsService.blocks);
    this.filteredBlocks$ = combineLatest([ of(this.blocks), this.filter$ ])
    .pipe(
      takeUntil(this.destory),
      map(([blocks, filterString]) => {
        if(typeof filterString !== 'string') filterString = '';
        filterString = filterString.replace(/\\/g, '');
        const pattern = filterString?.split('').map((v: string) => `(?=.*${v})`).join('');
        const regex = new RegExp(`${pattern}`, 'gi');

        // return blocks.filter(block => regex.exec(block));
        return blocks.filter(block => block.name.match(regex));
      })
    );
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

  addBlock(block: SearchableBlock) {
    this.addBlockEmitter.emit(block);
  }
}
