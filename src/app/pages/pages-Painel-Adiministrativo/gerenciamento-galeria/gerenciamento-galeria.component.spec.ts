import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoGaleriaComponent } from './gerenciamento-galeria.component';

describe('GerenciamentoGaleriaComponent', () => {
  let component: GerenciamentoGaleriaComponent;
  let fixture: ComponentFixture<GerenciamentoGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
