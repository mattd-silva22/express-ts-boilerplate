import { Server } from "./server";

try {
  const server = new Server();
  server.start(3000);
} catch (error) {
  console.log("Error starting server: ", error);
}
