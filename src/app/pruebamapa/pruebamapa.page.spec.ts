import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebamapaPage } from './pruebamapa.page';

describe('PruebamapaPage', () => {
  let component: PruebamapaPage;
  let fixture: ComponentFixture<PruebamapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebamapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebamapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
