/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeddyBearComponent } from './teddy-bear.component';

describe('TeddyBearComponent', () => {
  let component: TeddyBearComponent;
  let fixture: ComponentFixture<TeddyBearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeddyBearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeddyBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
