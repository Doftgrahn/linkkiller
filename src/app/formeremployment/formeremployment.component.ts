import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formeremployment',
  templateUrl: './formeremployment.component.html',
  styleUrls: ['./formeremployment.component.scss']
})
export class FormeremploymentComponent implements OnInit {
  formEmpl: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formEmpl = this.fb.group({
      former: this.fb.array([this.empoloyeeGroup()])
    })
  }

  empoloyeeGroup() {
    return this.fb.group({
      company: ['', Validators.required],
      role: ['', Validators.required],
      amountofYears: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      lastYear: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })
  }


  get employmentArray() {
    return this.formEmpl.get('former') as FormArray;
  }

  addMoreEmployment() {
    this.employmentArray.push(this.empoloyeeGroup())
  }

}
