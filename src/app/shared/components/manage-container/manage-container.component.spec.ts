import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContainerComponent } from './manage-container.component';

describe('ManageContainerComponent', () => {
  let component: ManageContainerComponent;
  let fixture: ComponentFixture<ManageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
