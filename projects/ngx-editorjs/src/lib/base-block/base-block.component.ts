import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-base-block',
  templateUrl: './base-block.component.html',
  styleUrls: ['./base-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseBlockComponent implements OnInit {

  constructor() {
    console.log('con parent');
    
  }

  ngOnInit(): void {
    console.log('PARENT');
    
  }

}
