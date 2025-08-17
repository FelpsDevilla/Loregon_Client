import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGalleryItemComponent } from './edit-gallery-item.component';

describe('GalleryManagementComponent', () => {
  let component: EditGalleryItemComponent;
  let fixture: ComponentFixture<EditGalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGalleryItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
