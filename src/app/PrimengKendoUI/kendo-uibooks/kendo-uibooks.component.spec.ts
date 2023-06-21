import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUIBooksComponent } from './kendo-uibooks.component';

describe('KendoUIBooksComponent', () => {
  let component: KendoUIBooksComponent;
  let fixture: ComponentFixture<KendoUIBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoUIBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoUIBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
