import { Router } from "express";
import { ExempleController } from "./exemple.controller";
import { AuthMiddleware } from "../shared/middleware/auth.middleware";

interface IExempleRouter {
  getRouter(): Router;
}

export class ExempleRouter implements IExempleRouter {
  private router: Router;
  private exempleController: ExempleController;

  constructor() {
    this.router = Router();
    this.exempleController = new ExempleController();
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares(): void {
    const authMiddleware = new AuthMiddleware();
    this.router.use(authMiddleware.checkAuthorization);
  }

  private setupRoutes(): void {
    this.router.post("/", this.exempleController.create);
    this.router.get("/", this.exempleController.findMany);
    this.router.get("/:id", this.exempleController.findOne);
  }

  public getRouter(): Router {
    return this.router;
  }
}
