import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarreservassPage } from './listarreservass.page';

describe('ListarreservassPage', () => {
  let component: ListarreservassPage;
  let fixture: ComponentFixture<ListarreservassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarreservassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarreservassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
