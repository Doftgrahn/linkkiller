import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillForm: FormGroup;
  skills: Object;
  comp: Object;

  constructor(private fb: FormBuilder, private ds: DataService) {
    this.skills = this.ds.getSkill();
    this.comp = this.ds.getCompetensItem();
  }


  ngOnInit() {
    this.skillForm = this.fb.group({
      competens: this.fb.array([this.compGroup()])
    })
  }

  compGroup() {
    return this.fb.group({
      skill: [''],
      competens: ['']
    })
  }

  get competensArray() {
    return this.skillForm.get('competens') as FormArray;
  }

  addForm() {
    this.competensArray.push(this.compGroup());
  }


}
