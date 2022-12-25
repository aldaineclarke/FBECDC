import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }
  parishes = ["Hanover", "St. James", "Trelawny", "St. Ann", "St. Mary", "Portland", "Westmoreland", "St. Elizabeth", "Manchester", "Clarendon", "St. Catherine", "Kingston", "St. Andrew", "St. Thomas"];

  hasAgreed =false;
  // TODO
  // Break Form into separate form groups to allow to stepper to better navigate different sections of the form.

  registrationForm = new FormGroup({

    childInfo: new FormGroup({
      fname: new FormControl(""),
      lname: new FormControl(""),
      mname: new FormControl(""),
      dob: new FormControl(""),
      gender: new FormControl(""),
    }),
    guardianInfo: new FormGroup({
      parent_name: new FormControl(""),
      parent_email:new FormControl(""),
      parent_addr_1: new FormControl(""),
      parent_addr_2: new FormControl(""),
      parent_addr_city: new FormControl(""),
      parent_addr_parish: new FormControl(""),
      parent_tel:new FormControl(""),
    }),

    healthInfo: new FormGroup({
      physician_name:new FormControl(""),
      physician_email:new FormControl(""),
      physician_address:new FormControl(""),
      physician_office:new FormControl(""),
      physician_tel:new FormControl(""),
      alergies: new FormControl(""),
    }),
    
  });
  showData(){
    console.log(this.registrationForm);
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}
