import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSobreComponent } from './section-sobre.component';

describe('SectionSobreComponent', () => {
  let component: SectionSobreComponent;
  let fixture: ComponentFixture<SectionSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionSobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
