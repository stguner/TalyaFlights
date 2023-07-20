import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDenemeComponent } from './api-deneme.component';

describe('ApiDenemeComponent', () => {
  let component: ApiDenemeComponent;
  let fixture: ComponentFixture<ApiDenemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiDenemeComponent]
    });
    fixture = TestBed.createComponent(ApiDenemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
