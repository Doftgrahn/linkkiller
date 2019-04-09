import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  competens = [{
    skill: 'html',
  },
  {
    skill: 'javascript',
  },
  {
    skill: 'jQuery',
  },
  {
    skill: 'Python',
  }
  ];

  skill = [{
    rating: 'extremely bad'
  },
  {
    rating: 'kinda bad'
  },
  {
    rating: 'good'
  },
  {
    rating: 'kinda good'
  }, {
    rating: 'extremely good'
  }, {
    rating: 'Mythical'
  },
  ];

  getSkill() {
    return this.skill;
  }


  getCompetensItem() {
    return this.competens;
  }


  constructor() { }
}
