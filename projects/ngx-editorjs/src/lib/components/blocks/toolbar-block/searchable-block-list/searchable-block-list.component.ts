import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxEditorjsService } from '../../../../ngx-editorjs.service';
import { combineLatest, map, Observable, of, startWith, Subject, takeUntil } from 'rxjs';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'searchable-block-list',
  templateUrl: './searchable-block-list.component.html',
  styleUrls: ['./searchable-block-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableBlockListComponent implements OnInit {

  @Output('closeLists') closeListsEmitter = new EventEmitter();

  signCtrl = new FormControl([]);
  signs = [
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Goat',
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
  ];

  filter$ = this.signCtrl.valueChanges.pipe(startWith(''));
  filteredSigns$!: Observable<string[]>;
  destory: Subject<boolean> = new Subject();

  constructor(private ngxEdotorjsService: NgxEditorjsService) { }

  ngOnInit(): void {
    this.filteredSigns$ = combineLatest([ of(this.signs), this.filter$ ])
    .pipe(
      takeUntil(this.destory),
      map(([signs, filterString]) => {
        if(typeof filterString !== 'string') filterString = '';
        filterString = filterString.replace(/\\/g, '');
        const pattern = filterString?.split('').map((v: string) => `(?=.*${v})`).join('');
        const regex = new RegExp(`${pattern}`, 'gi');

        // return signs.filter(sign => regex.exec(sign));
        return signs.filter(sign => sign.match(regex));
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

  addBlock() {
    this.closeLists();
    this.ngxEdotorjsService.addNewBlockSubject.next('')
  }
}
