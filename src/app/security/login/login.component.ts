import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingCommon } from 'src/app/common/booking.common';
import { ValidatorCommon } from 'src/app/common/validator.common';
import { LoginRequest } from 'src/app/dto/request/security/login.request.component';
import { AuthService } from 'src/app/services/security/login.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BookingCommon implements OnInit {
  public formGroupLogin: FormGroup = new FormGroup({});
  public valuesValidators = ["loginId", "password"];
  public loginRequest: LoginRequest = new LoginRequest();
  public loginFail: boolean = false;
  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
    super();
  }
  ngOnInit(): void {
    this.initFormGroup();
    let user = this.tokenStorage.getRememberMe();
    if (user.checked) {
      this.setRememberMe(user);
    }
  }

  get f() {
    return this.formGroupLogin.controls;
  }

  initFormGroup() {
    this.formGroupLogin = new FormGroup({
      loginId: new FormControl(),
      password: new FormControl(),
      checked: new FormControl(false)
    });
  }

  setRememberMe(user: LoginRequest) {
    this.formGroupLogin = new FormGroup({
      loginId: new FormControl(user.loginId),
      password: new FormControl(user.password),
      checked: new FormControl(user.checked)
    });
  }

  login() {
    this.submit = true;
    ValidatorCommon.setValidatorFormGroup(this.formGroupLogin, this.valuesValidators);
    if (this.formGroupLogin.invalid) {
      return;
    }
    this.loginRequest = this.formGroupLogin.value;
    if (this.loginRequest.checked) {
      this.rememberLogin(this.loginRequest);
    }
    this.authService.login(this.loginRequest).subscribe(
      {
        next: (response) => {
          this.apiResponse = response;
        },
        complete: () => {
          if (this.apiResponse.status.code === this.httpStatusCode.HTTP_STATUS_200) {
            this.tokenStorage.saveToken(this.apiResponse.result.accessToken);
            this.tokenStorage.saveUserName(this.apiResponse.result.shopName);
            setTimeout(() => {
              this.spinnerService.resetSpinner();
              this.router.navigate(['/dashboard']);
            }, 300);
          } else {
            this.loginFail = !this.loginFail;
          }
        },
        error: (err) => {
          this.loginFail = !this.loginFail;
        },
      }
    );
  }

  keypress(event: KeyboardEvent) {
    this.loginFail = false;
  }

  keyup(event: KeyboardEvent) {
    this.loginFail = false;
  }

  rememberLogin(object: any) {
    this.tokenStorage.saveRememberMe(object);
  }
}
