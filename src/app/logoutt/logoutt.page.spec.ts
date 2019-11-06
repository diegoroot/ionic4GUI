import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogouttPage } from './logoutt.page';

describe('LogouttPage', () => {
  let component: LogouttPage;
  let fixture: ComponentFixture<LogouttPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogouttPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogouttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
