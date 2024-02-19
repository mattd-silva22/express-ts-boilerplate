import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateUserBadRequest } from "./errors/CreateUserBadRequest.error";
import { ExempleService } from "./exemple.service";
import { GenericError } from "../shared/errors/GenericError.error";

const exempleService = new ExempleService();
export class ExempleController {
  public async findOne(req: Request, res: Response): Promise<any> {
    const id = req.params.id;

    if (!id) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(new GenericError(400, "Id is required", "IdIsRequired"));
    } else {
      return exempleService
        .findOne(id)
        .then((user) => {
          res.status(StatusCodes.OK).send(user);
        })
        .catch((error) => {
          res
            .status(StatusCodes.NOT_FOUND)
            .send(new GenericError(404, error, "UserNotFound"));
        });
    }
  }

  public async create(req: Request, res: Response): Promise<any> {
    const { name, email } = req.body;
    const errors: string[] = [];

    if (!name) {
      errors.push("Name is required");
    } else if (name.length < 3) {
      errors.push("Name must be at least 3 characters");
    } else if (!email) {
      errors.push("Email is required");
    }

    if (errors.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(new CreateUserBadRequest("Fail on create user", errors));
    }

    return exempleService
      .create({ name: name, email: email })
      .then((user) => {
        res.status(StatusCodes.CREATED).send(user);
      })
      .catch((error) => {
        res
          .status(StatusCodes.BAD_GATEWAY)
          .send(new GenericError(500, error, "CreateUserError"));
      });
  }

  public async findMany(req: Request, res: Response): Promise<any> {
    return exempleService
      .findMany()
      .then((users) => {
        res.status(StatusCodes.OK).send(users);
      })
      .catch((error) => {
        res
          .status(StatusCodes.BAD_GATEWAY)
          .send(new GenericError(500, error, "FindManyError"));
      });
  }
}
