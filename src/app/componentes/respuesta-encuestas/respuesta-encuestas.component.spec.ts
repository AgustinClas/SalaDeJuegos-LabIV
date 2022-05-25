import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaEncuestasComponent } from './respuesta-encuestas.component';

describe('RespuestaEncuestasComponent', () => {
  let component: RespuestaEncuestasComponent;
  let fixture: ComponentFixture<RespuestaEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaEncuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
