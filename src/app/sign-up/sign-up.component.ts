import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {FakeSignUpService} from '../service/fake-sign-up.service';
import {first} from 'rxjs/operators';
import {Text} from '../model/text';
import {Router} from '@angular/router';
import {EmailValidators} from './email.validator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  text: any = Text ;
  form: any;
  loading: boolean = false;
  isHideForm: boolean = true;
  interests: any = ['Development', 'Accounting', 'Marketing', 'Other']

  constructor(
    private  fb: FormBuilder,
    private signup: FakeSignUpService,
    private router: Router,
    private translate: TranslateService
  ) {
  }
  ngOnInit(): void {
    this.form =  this.fb.group({
      username: ['', Validators.required, EmailValidators.isValidEmail],
      interest: ['']
    });
  }

  // Choose interest using select dropdown
  changeInterest(e) {
    this.form.get('interest').setValue(e.target.value, {
      onlySelf: false
    });
  }

  onSubmit() {
    this.loading = true;
    const signup = this.signup.createAccount(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.form.value);
          this.loading = false;
          this.isHideForm = false;
          this.form.reset();
        },
        error => {
          alert(error.error.message);
          console.log(error);
          this.loading = false;
          this.isHideForm = true;
          this.form.reset();
        });

  }
}
