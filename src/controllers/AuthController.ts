import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";
import { HTTPStatus } from "../modules/objects/HTTPStatus";
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
          res.status(HTTPStatus.SUCCESSFUL.OK).json(user);
        } else {
          res
            .status(HTTPStatus.CLIENT_ERROR.UNAUTHORIZED)
            .json({ error: "invalid login" });
        }
      });
    } catch (error) {
      /**
       * handle server errors
       */
      console.log(error);
      res
        .status(HTTPStatus.SERVER_ERROR.INTERNAL_SERVER_ERROR)
        .json({ error: "internal server error, please contact the admin" });
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
