import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatroEnLineaComponent } from './cuatro-en-linea.component';

describe('CuatroEnLineaComponent', () => {
  let component: CuatroEnLineaComponent;
  let fixture: ComponentFixture<CuatroEnLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuatroEnLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuatroEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
