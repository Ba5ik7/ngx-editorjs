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

  @Output('closeLists') closeListsEmitter = new EventEmitter();

  blockCtrl = new FormControl([]);
  blocks!: SearchableBlock[];
  blocksDefaults: SearchableBlock[] = [
    { type: 'Header', name: 'Header' },
    { type: 'Paragraph', name: 'Paragraph' }
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
        return blocks.filter(block => block.type.match(regex));
      })
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destory.next(true);
  }

  closeLists() {
    this.closeListsEmitter.emit('close');
  }

  addBlock(block: SearchableBlock) {
    this.closeLists();
    this.ngxEdotorjsService.addNewBlockSubject.next(block);
  }
}
