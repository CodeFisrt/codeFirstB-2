import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfForComponent } from './ng-if-for.component';

describe('NgIfForComponent', () => {
  let component: NgIfForComponent;
  let fixture: ComponentFixture<NgIfForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
