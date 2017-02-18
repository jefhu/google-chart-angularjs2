/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GooglechartComponent } from './googlechart.component';

describe('GooglechartComponent', () => {
  let component: GooglechartComponent;
  let fixture: ComponentFixture<GooglechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
