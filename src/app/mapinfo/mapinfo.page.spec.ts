import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapinfoPage } from './mapinfo.page';

describe('MapinfoPage', () => {
  let component: MapinfoPage;
  let fixture: ComponentFixture<MapinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
