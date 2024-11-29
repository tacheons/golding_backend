import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";
import * as bcrypt from "bcrypt";
import { Utils } from "../modules/classes/Utils";

/**
 * @implementaion
 * AuthController is the main controller for all route related to authentication
 * it's integrated with the AuthService to process all authentication related
 * requests
 *
 * @return
 * various methods returns values
 *
 * @author
 * @since
 * v1.0.0
 */
export class AuthController {
  constructor() {
    // this.userService = new UserService();
  }

  /**
   * @implementaion
   * Services Login route to enable user authentication
   * it generates jwt tokens that is use for the authentication
   *
   * @return
   * returns client authentication data
   *
   * @author
   * @since
   * v1.0.0
   */
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      // Load user from  DB.
      let user = await new UserService().findByEmail(email);

      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          let authService = new AuthService();
          user = await authService.login(email, password);
          console.log(user);

          if (user) {
            let token = await new Utils().createToken(user.id);
            user = { id: user.id, token: token };
            //   console.log(user);
          }
          res.json(user);
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "user doest not exist" });
    }
  }

  /**
   * @implementaion
   * Services logout routes and nullifies user session
   * and token data is it has expired
   *
   * @return
   * void
   *
   * @author
   * @since
   * v1.0.0
   */
  async logout(req: Request, res: Response, next: NextFunction) {}
}
