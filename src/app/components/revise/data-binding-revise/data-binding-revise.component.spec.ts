import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingReviseComponent } from './data-binding-revise.component';

describe('DataBindingReviseComponent', () => {
  let component: DataBindingReviseComponent;
  let fixture: ComponentFixture<DataBindingReviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingReviseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingReviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
