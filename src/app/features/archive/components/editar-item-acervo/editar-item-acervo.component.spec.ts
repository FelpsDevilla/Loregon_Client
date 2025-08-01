import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarItemAcervoComponent } from './editar-item-acervo.component';

describe('EditarItemAcervoComponent', () => {
  let component: EditarItemAcervoComponent;
  let fixture: ComponentFixture<EditarItemAcervoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarItemAcervoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarItemAcervoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
