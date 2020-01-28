export interface RegistrationRequest {
  name: string;
  dob: string;
  nationality: string;
  email: string;
  tel: string;
  pref: string;
}

export interface Country {
  viewValue: string;
  value: string;
}
