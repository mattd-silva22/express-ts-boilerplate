import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { AuthError } from "../errors/AuthError";

export class AuthMiddleware {
  checkAuthorization(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send(new AuthError("Auth is required"));
    }
    const [authType, token] = authorization.split(" ");
    if (authType !== "Api-Key") {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send(new AuthError("Invalid token"));
    }
    if (token !== "123") {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send(new AuthError("Invalid token"));
    }
    next();
  }
}
