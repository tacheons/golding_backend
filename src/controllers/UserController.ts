import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/UserService";
import { User } from "../entity/User";
import * as bcrypt from "bcrypt";

export class UserController {
  private userService = new UserService();
  constructor() {
    // this.userService = new UserService();
  }

  async all(req: Request, res: Response, next: NextFunction) {
    console.log("am herreeeee");
    let userService = new UserService();
    const users = await userService.all();
    res.json(users);
  }

  async one(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    const user = await this.userService.one(id);

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  async save(req: Request, res: Response, next: NextFunction) {
    let user = Object.assign(new User(), req.body);
    console.log(req.body);

    //password encryption
    let saltRounds = 10;
    bcrypt.hash(user.password, saltRounds, async (err, hashedPassword) => {
      // Store hash in your password DB.
      user.password = hashedPassword;
      let userService = new UserService();
      let result = await userService.save(user);
      res.status(200).json(result);
    });
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    await this.userService.remove(id);

    return "user has been removed";
  }
}
