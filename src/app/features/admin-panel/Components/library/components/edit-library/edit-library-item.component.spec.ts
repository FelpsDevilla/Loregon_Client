import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLibraryItemComponent } from './edit-library-item.component';

describe('EditLibraryItemComponent', () => {
  let component: EditLibraryItemComponent;
  let fixture: ComponentFixture<EditLibraryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLibraryItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLibraryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
