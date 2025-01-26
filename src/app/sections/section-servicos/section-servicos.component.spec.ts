import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicosComponent } from './section-servicos.component';

describe('SectionServicosComponent', () => {
  let component: SectionServicosComponent;
  let fixture: ComponentFixture<SectionServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionServicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
