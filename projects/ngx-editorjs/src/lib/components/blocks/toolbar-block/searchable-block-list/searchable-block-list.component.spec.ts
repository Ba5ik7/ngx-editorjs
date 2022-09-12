import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableBlockListComponent } from './searchable-block-list.component';

describe('SearchableBlockListComponent', () => {
  let component: SearchableBlockListComponent;
  let fixture: ComponentFixture<SearchableBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchableBlockListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchableBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
