import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";
import { Utils } from "../modules/classes/Utils";

export class AuthController {
  constructor() {
    // this.userService = new UserService();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    let authService = new AuthService();
    let user = await authService.login(email, password);
    console.log(user);

    if (user) {
      let token = new Utils().createToken(user.id);
      user = { id: user.id, token: token };
      //   console.log(user);
    }
    res.json(user);
  }

  async logout(req: Request, res: Response, next: NextFunction) {}
}
