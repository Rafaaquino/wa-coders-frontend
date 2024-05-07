import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForgotPasscomponent } from './forgotPass.component';

describe('RecoverpwdComponent', () => {
  let component: ForgotPasscomponent;
  let fixture: ComponentFixture<ForgotPasscomponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasscomponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
