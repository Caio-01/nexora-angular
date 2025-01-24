import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionClientesComponent } from './section-clientes.component';

describe('SectionClientesComponent', () => {
  let component: SectionClientesComponent;
  let fixture: ComponentFixture<SectionClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
