import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarreservasPage } from './listarreservas.page';

describe('ListarreservasPage', () => {
  let component: ListarreservasPage;
  let fixture: ComponentFixture<ListarreservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarreservasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarreservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
