import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosPage } from './episodios.page';

describe('EpisodiosPage', () => {
  let component: EpisodiosPage;
  let fixture: ComponentFixture<EpisodiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
