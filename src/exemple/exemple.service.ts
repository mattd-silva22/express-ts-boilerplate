import { mockData } from "../shared/database/mockdata";
import { User } from "./entities/user.entity";

export class ExempleService {
  public findOne(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      mockData.find((user) => user.id === id)
        ? resolve(mockData.find((user) => user.id === id))
        : reject("User not found");
    });
  }

  public create(data: { name: string; email: string }): Promise<any> {
    return new Promise((resolve, reject) => {
      const user = new User(data.name, data.email);
      mockData.push(user);
      resolve(user);
    });
  }

  public findMany(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(mockData);
    });
  }
}
