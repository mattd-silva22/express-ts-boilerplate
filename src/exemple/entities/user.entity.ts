import { v4 as uuid } from "uuid";

export class User {
  public id: string;
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.id = uuid();
    this.id = this.name = name;
    this.email = email;
  }
}
