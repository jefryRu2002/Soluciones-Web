import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesAsignadas } from './ordenes-asignadas';

describe('OrdenesAsignadas', () => {
  let component: OrdenesAsignadas;
  let fixture: ComponentFixture<OrdenesAsignadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesAsignadas],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdenesAsignadas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
