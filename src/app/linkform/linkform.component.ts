import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-linkform',
  templateUrl: './linkform.component.html',
  styleUrls: ['./linkform.component.scss']
})
export class LinkformComponent implements OnInit {

  /*First Name Validation*/
  firstNameValidation = [Validators.required, Validators.minLength(3)];

  /*Last Name Validation*/
  lastNameValidation = [];

  /*Adress Validation*/
  adressValidation = [];

  /*Education Validation*/

  educationValidation = [];

  /*Year of Exam Validation*/

  yearOfExam = [];

  /*SKill Validation*/

  skillsValidation = [];

  /*Rating Validation*/

  ratingValidation = [];

  userForm: FormGroup = this.fb.group({
    firstName: ['', this.firstNameValidation],
    lastName: ['', this.lastNameValidation],
    email: ['', this.adressValidation],
    education: ['', this.educationValidation],
    yearOfExamination: ['', this.yearOfExam],
    competens: this.fb.group({
      skills: ['', this.skillsValidation],
      rating: ['', this.ratingValidation],
    }),
    formerEmployees: this.fb.group({
      companyName: [''],
      work: [''],
      yearOfEmployment: [''],
      lastYearYouWorked: [''],
    })
  });

  onSubmit(userForm) {
    let data = userForm.value;
    // console.log(data);
    // Todo, send this somewehere....
console.log(userForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  /*
  tidigare arbetsgivare (kan vara noll eller flera: företagsnamn, yrkesroll, anställningsår och eventuellt sista året man jobbat där)
*/



}
