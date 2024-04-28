import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { codeAuthPassword } from './codeAuthPassword.component';

describe('RecoverpwdComponent', () => {
  let component: codeAuthPassword;
  let fixture: ComponentFixture<codeAuthPassword>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [codeAuthPassword],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(codeAuthPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
