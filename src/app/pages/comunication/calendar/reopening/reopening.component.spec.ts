/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReopeningComponent } from './reopening.component';

describe('ReopeningComponent', () => {
  let component: ReopeningComponent;
  let fixture: ComponentFixture<ReopeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReopeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReopeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
