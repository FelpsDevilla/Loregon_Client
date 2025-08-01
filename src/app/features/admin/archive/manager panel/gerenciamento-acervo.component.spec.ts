import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoAcervoComponent } from './gerenciamento-acervo.component';

describe('GerenciamentoAcervoComponent', () => {
  let component: GerenciamentoAcervoComponent;
  let fixture: ComponentFixture<GerenciamentoAcervoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoAcervoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoAcervoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
