import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarreservas1Page } from './listarreservas1.page';

describe('Listarreservas1Page', () => {
  let component: Listarreservas1Page;
  let fixture: ComponentFixture<Listarreservas1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listarreservas1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listarreservas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
