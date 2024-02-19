export class CreateUserBadRequest extends Error {
  message: string;
  erros: string[];
  constructor(message: string, erros: string[]) {
    super("Create user bad request");
    this.name = "CreateUserBadRequest";
    this.message = message;
    this.erros = erros ? erros : [];
  }
}
