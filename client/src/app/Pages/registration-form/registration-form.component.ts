import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }
  parishes = ["Hanover", "St. James", "Trelawny", "St. Ann", "St. Mary", "Portland", "Westmoreland", "St. Elizabeth", "Manchester", "Clarendon", "St. Catherine", "Kingston", "St. Andrew", "St. Thomas"];

  hasAgreed =false;

  registrationForm = new FormGroup({
    fname: new FormControl(""),
    lname: new FormControl(""),
    mname: new FormControl(""),
    dob: new FormControl(""),
    gender: new FormControl(""),
    parent_name: new FormControl(""),
    parent_email:new FormControl(""),
    parent_address: new FormControl(""),
    parent_tel:new FormControl(""),
    physician_name:new FormControl(""),
    physician_address:new FormControl(""),
    physician_office:new FormControl(""),
    physician_tel:new FormControl(""),
    alergies: new FormControl(),
    contacts:new FormGroup({
        fullname: new FormControl(""),
        relationship: new FormControl(""),
        address:new FormControl(""),
  }), 
    
  });

  ngOnInit(): void {
  }

}
