import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }
  parishes = ["Hanover", "St. James", "Trelawny", "St. Ann", "St. Mary", "Portland", "Westmoreland", "St. Elizabeth", "Manchester", "Clarendon", "St. Catherine", "Kingston", "St. Andrew", "St. Thomas"]

  registrationForm = new FormGroup({
    
  })

  ngOnInit(): void {
  }

}
