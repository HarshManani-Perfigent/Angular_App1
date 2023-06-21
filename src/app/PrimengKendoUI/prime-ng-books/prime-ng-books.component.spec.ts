import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgBooksComponent } from './prime-ng-books.component';

describe('PrimeNgBooksComponent', () => {
  let component: PrimeNgBooksComponent;
  let fixture: ComponentFixture<PrimeNgBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNgBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNgBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
