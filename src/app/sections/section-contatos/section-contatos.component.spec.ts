import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContatosComponent } from './section-contatos.component';

describe('SectionContatosComponent', () => {
  let component: SectionContatosComponent;
  let fixture: ComponentFixture<SectionContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionContatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
