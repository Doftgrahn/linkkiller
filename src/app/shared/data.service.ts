import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: User[] = [{
    firstName: null,
    lastName: null,
    adress: null,
    education: null,
    yearOfExamination: null,
    competens: [{
      value: null,
      rating: null,
    }],
  }];

  getUser() {
    return this.user;
  }

  formerEmployee = [{

  }];








  constructor() { }
}
