export class Users {
  key: string;
  firstname: string;
  lastname: string;
  bloqued: boolean = false;
  age: number;

    constructor(key, firstname, lastname, bloqued, age = null) {
    this.key = key;
    this.firstname = firstname;
    this.lastname = lastname;
    this.bloqued = bloqued;
    if ( age ) {
      this.age = age;
    }
  }
}
