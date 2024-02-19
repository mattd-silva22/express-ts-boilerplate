import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

export class AuthMiddleware {
  checkAuthorization(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized");
    }
    const [authType, token] = authorization.split(" ");
    if (authType !== "Api-Key") {
      return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized");
    }
    if (token !== "123") {
      return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized");
    }
    next();
  }
}
