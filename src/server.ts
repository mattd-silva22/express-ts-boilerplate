import express, { Request, Response } from "express";
import cors from "cors";
import http from "http";
import { ExempleRouter } from "./exemple/exemple.router";

export class Server {
  private app = express();
  private server!: http.Server;

  private init(): void {
    console.log("Server is starting...");
    this.setupExpress();
    this.setupRouters();
  }

  private setupExpress(): void {
    console.log("Setting up express...");
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setupRouters(): void {
    console.log("Setting up routers...");
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });
    const exempleRouter = new ExempleRouter();
    this.app.use("/exemple", exempleRouter.getRouter());
  }

  public start(port: number) {
    this.init();
    this.server = this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }

  public getApp(): express.Application {
    return this.app;
  }

  public stop(): void {
    this.server.close();
    console.log("Server stopped");
  }
}
