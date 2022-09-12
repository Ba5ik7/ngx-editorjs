import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOptionsListComponent } from './block-options-list.component';

describe('BlockOptionsListComponent', () => {
  let component: BlockOptionsListComponent;
  let fixture: ComponentFixture<BlockOptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockOptionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
