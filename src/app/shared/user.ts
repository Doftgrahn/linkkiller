export interface User {
  firstName: string;
  lastName: string;
  adress: string;
  education: string;
  yearOfExamination: number;
  competens: [{
    value:string;
    rating:number;
  }]
}
