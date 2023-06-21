import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfigentSelectComponent } from './perfigent-select.component';

describe('PerfigentSelectComponent', () => {
  let component: PerfigentSelectComponent;
  let fixture: ComponentFixture<PerfigentSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfigentSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfigentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
