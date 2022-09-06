import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';


@Component({
  selector: 'toolbar-block',
  templateUrl: './toolbar-block.component.html',
  styleUrls: ['./toolbar-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBlockComponent implements OnInit {
  isOpen = false;

  stateForm = this._formBuilder.group({ stateGroup: '' });
  stateGroups: string[] = ['One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filteredOptions = this.stateForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.stateGroups.filter(option => option.toLowerCase().includes(filterValue));
  }

  openBlocksList() {
    this.isOpen = !this.isOpen;
  }
}
