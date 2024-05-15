import { StatusCodes } from "http-status-codes";
import { GenericError } from "../../shared/errors/GenericError.error";
import { EErrorsTypes } from "../../shared/errors/types/errorsTypes.type";

export class CreateUserValidationError extends GenericError {
  errors: string[];
  constructor(errors: string[]) {
    super(
      "CreateUserValidationError",
      StatusCodes.BAD_REQUEST,
      "Fail to create new user",
      EErrorsTypes.Validation
    );
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
