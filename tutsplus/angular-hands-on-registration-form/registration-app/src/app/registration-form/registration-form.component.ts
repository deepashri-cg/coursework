import {Component, OnInit} from '@angular/core';
import {RegistrationRequest} from './registration-request';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public regRequest: RegistrationRequest;
  countries: any[];

  constructor() {
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

  }

  contactFieldChanged() {

  }
}
