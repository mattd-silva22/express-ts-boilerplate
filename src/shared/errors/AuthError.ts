import { GenericError } from "./GenericError.error";
import { EErrorsTypes } from "./types/errorsTypes.type";

export class AuthError extends GenericError {
  constructor(message: string) {
    super("Auth Error", 401, message, EErrorsTypes.Auth);
  }
}
