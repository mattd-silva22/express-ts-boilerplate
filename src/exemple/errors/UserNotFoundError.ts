import { BadRequestError } from "../../shared/errors/BadRequestError";

export class UserNotFoundError extends BadRequestError {
  constructor() {
    super("User not found", ["User not found"]);
  }
}
