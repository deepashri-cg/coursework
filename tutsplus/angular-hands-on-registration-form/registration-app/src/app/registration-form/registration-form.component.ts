import {Component, OnInit} from '@angular/core';
import {Country, RegistrationRequest} from './registration-request';
import {NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public regRequest: RegistrationRequest;
  countries: Country[];
  showContactError: boolean;

  constructor() {
  }

  public get eitherFilled(): boolean {
    return this.regRequest.email.length > 0 || this.regRequest.tel.length > 0;
  }

  public get emailFilledTelEmpty(): boolean {
    return this.regRequest.email.length > 0 && !this.regRequest.tel.length;
  }

  public get telFilledEmailEmpty(): boolean {
    return this.regRequest.tel.length > 0 && !this.regRequest.email.length;
  }

  public get bothEmpty(): boolean {
    return !this.regRequest.email.length && !this.regRequest.tel.length;
  }

  ngOnInit() {
    this.regRequest = {
      name: '',
      dob: '',
      email: '',
      nationality: '',
      pref: '',
      tel: ''
    };
    this.countries = [
      {viewValue: 'American', value: 'us'},
      {viewValue: 'Indian', value: 'in'},
      {viewValue: 'British', value: 'br'}
    ];
    this.showContactError = false;
  }

  public contactFieldChanged(form: NgForm): void {
    this.regRequest.pref = (this.emailFilledTelEmpty) ? this.regRequest.email
      : (this.telFilledEmailEmpty) ? this.regRequest.tel
        : '';

    const emailControl = form.controls.email;
    const telControl = form.controls.tel;

    if (this.eitherFilled) {
      emailControl.clearValidators();
      emailControl.updateValueAndValidity();
      telControl.clearValidators();
      telControl.updateValueAndValidity();
      this.showContactError = false;
    } else if (this.bothEmpty && emailControl.touched && telControl.touched) {
      emailControl.setValidators(Validators.required);
      emailControl.updateValueAndValidity();
      telControl.setValidators(Validators.required);
      telControl.updateValueAndValidity();
      this.showContactError = true;
    }
  }

  public selectPref(pref: string): void {
    this.regRequest.pref = pref;
  }

  touchedAndInvalid(el: HTMLElement): boolean {
    return el.classList.contains('ng-touched') && el.classList.contains('ng-invalid');
  }
}
