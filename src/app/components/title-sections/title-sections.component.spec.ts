import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSectionsComponent } from './title-sections.component';

describe('TitleSectionsComponent', () => {
  let component: TitleSectionsComponent;
  let fixture: ComponentFixture<TitleSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
