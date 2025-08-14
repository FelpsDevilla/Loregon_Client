import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PainelAdiministrativoComponent } from './admin-panel.component';

describe('PainelAdiministrativoComponent', () => {
  let component: PainelAdiministrativoComponent;
  let fixture: ComponentFixture<PainelAdiministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAdiministrativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAdiministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
