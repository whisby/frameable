/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FramingComponent } from './framing.component';

describe('FramingComponent', () => {
  let component: FramingComponent;
  let fixture: ComponentFixture<FramingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
