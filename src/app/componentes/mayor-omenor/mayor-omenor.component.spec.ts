import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorOmenorComponent } from './mayor-omenor.component';

describe('MayorOmenorComponent', () => {
  let component: MayorOmenorComponent;
  let fixture: ComponentFixture<MayorOmenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayorOmenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorOmenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
