import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionValoresComponent } from './section-valores.component';

describe('SectionValoresComponent', () => {
  let component: SectionValoresComponent;
  let fixture: ComponentFixture<SectionValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionValoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
