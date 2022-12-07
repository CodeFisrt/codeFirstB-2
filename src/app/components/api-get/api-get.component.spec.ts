import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetComponent } from './api-get.component';

describe('ApiGetComponent', () => {
  let component: ApiGetComponent;
  let fixture: ComponentFixture<ApiGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
