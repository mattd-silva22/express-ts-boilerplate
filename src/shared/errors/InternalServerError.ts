import { GenericError } from "./GenericError.error";
import { EErrorsTypes } from "./types/errorsTypes.type";

export class InternalServerError extends GenericError {
  constructor(message: string) {
    super("Internal Server Error", 500, message, EErrorsTypes.InternalServer);
  }
}
