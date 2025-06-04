import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoBibliotecaComponent } from './gerenciamento-biblioteca.component';

describe('GerenciamentoBibliotecaComponent', () => {
  let component: GerenciamentoBibliotecaComponent;
  let fixture: ComponentFixture<GerenciamentoBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoBibliotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
