import { EErrorsTypes } from "./types/errorsTypes.type";

export class GenericError extends Error {
  public status: number;
  public message: string;
  public type: string;

  constructor(
    name: string,
    status: number,
    message: string,
    type: EErrorsTypes
  ) {
    super(message);
    this.name = name;
    this.status = status;
    this.message = message;
    this.type = type;
  }

  log(): void {
    console.error(
      `${this.type}: \nName: ${this.name}\nStatus: ${this.status}\nMessage: ${this.message}\n`
    );
  }

  toJSON(): object {
    return {
      name: this.name,
      status: this.status,
      message: this.message,
      type: this.type,
    };
  }
}
