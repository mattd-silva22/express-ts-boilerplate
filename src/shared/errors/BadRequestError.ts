import { GenericError } from "./GenericError.error";
import { EErrorsTypes } from "./types/errorsTypes.type";

export class BadRequestError extends GenericError {
  errors: string[];
  constructor(message: string, errors: string[]) {
    super("BadRequestError", 400, message, EErrorsTypes.BadRequest);
    this.errors = errors;
  }

  toJSON(): object {
    return {
      name: this.name,
      status: this.status,
      message: this.message,
      type: this.type,
      errors: this.errors,
    };
  }
}
