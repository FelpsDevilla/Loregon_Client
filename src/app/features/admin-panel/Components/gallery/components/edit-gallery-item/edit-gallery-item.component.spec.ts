import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarItemGaleriaComponent } from './edit-gallery-item.component';

describe('EditarItemGaleriaComponent', () => {
  let component: EditarItemGaleriaComponent;
  let fixture: ComponentFixture<EditarItemGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarItemGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarItemGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
