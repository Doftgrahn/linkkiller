import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-linkform',
  templateUrl: './linkform.component.html',
  styleUrls: ['./linkform.component.scss']
})
export class LinkformComponent implements OnInit {

  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;
  description: AbstractControl;
  education: AbstractControl;
  examination: AbstractControl;

  /*First Name Validation*/
  firstNameValidation = [Validators.required, Validators.minLength(5), this.isYourName];
  /*Last Name Validation*/
  lastNameValidation = [Validators.required, Validators.minLength(2),this.isYourLastName];
  /*Adress Validation*/
  adressValidation = [Validators.required, Validators.email];
  /* Description Validation*/
  descriptionValidator = [Validators.minLength(20)];
  /*Education Validation*/
  educationValidation = [Validators.minLength(5)];
  /*Year of Exam Validation*/
  yearOfExam = [Validators.pattern("^[0-9]*$"), Validators.max(9000)];

  /*Forms*/

  userForm: FormGroup = this.fb.group({
    firstName: ['', this.firstNameValidation],
    lastName: ['', this.lastNameValidation],
    email: ['', this.adressValidation],
    description: ['', this.descriptionValidator],
    education: ['', this.educationValidation],
    yearOfExamination: ['', this.yearOfExam],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstName = this.userForm.get('firstName');
    this.lastName = this.userForm.get('lastName');
    this.email = this.userForm.get('email');
    this.description = this.userForm.get('description');
    this.education = this.userForm.get('education');
    this.examination = this.userForm.get('yearOfExamination');
  }

  isYourName(text: AbstractControl) {
    if (text.value.toUpperCase() == 'SIMON') {
      return { isYourName: true }
    }
    return null;
  }
  isYourLastName(text: AbstractControl) {
    if (text.value.toUpperCase() === 'GRAHN') {
      return { isYourLastName: true }
    }
    return null;
  }


  onSubmit(userForm: AbstractControl) {
    let data = userForm.value;
    // Todo, send this somewehere....
  }

}
