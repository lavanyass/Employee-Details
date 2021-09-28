const ID = 'Id';
const FIRSTNAME = 'FirstName';
const LASTNAME = 'LastName';
const AGE = 'Age';
const SALARY = 'Salary';

export const formkeys = {
  ID,
  FIRSTNAME,
  LASTNAME,
  AGE,
  SALARY,
};

export interface NewEmployeeForm {
  [ID]: Number;
  [FIRSTNAME]: String;
  [LASTNAME]: String;
  [AGE]: Number;
  [SALARY]: Number;
}
