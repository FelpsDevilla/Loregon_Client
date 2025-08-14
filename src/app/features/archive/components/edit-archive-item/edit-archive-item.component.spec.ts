import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArchiveItemComponent } from './edit-archive-item.component';

describe('EditarItemAcervoComponent', () => {
  let component: EditArchiveItemComponent;
  let fixture: ComponentFixture<EditArchiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditArchiveItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditArchiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
