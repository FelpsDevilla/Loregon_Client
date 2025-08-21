import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementLibraryComponent } from './library-management.component';

describe('ManagementLibraryComponent', () => {
  let component: ManagementLibraryComponent;
  let fixture: ComponentFixture<ManagementLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
