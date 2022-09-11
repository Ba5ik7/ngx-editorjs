import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, of, startWith, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent implements OnInit {
  signCtrl = new FormControl([]);
  openBlocks = false;
  openBlocksOption = false;
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

  constructor() {}

  ngOnInit() {
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
  
  openBlocksList() {
    this.openBlocks = !this.openBlocks;
  }
  
  openBlocksOptionList() {
    this.openBlocksOption = !this.openBlocksOption;

  }
}
