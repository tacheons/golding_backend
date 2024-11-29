import * as jwt from "jsonwebtoken";
import serverConfig from "../configurations/serverConfig";

/**
 * @implementaion
 * Utility class for all utility functions
 *
 * @params
 * id - user id
 * @return
 * router with preconfigured routes
 *
 * @author
 * @since
 * v1.0.0
 */
export class Utils {
  constructor() {
    // this.userService = new UserService();
  }

  /**
   * @implementation
   * createToken JWT token for the authentication of the user, it makes use of
   * the screte code from the server configuration and the user id to generate the
   * token, and set it's expiration date, default 1 days
   *
   * @params {*} id - user id
   * @returns returns jwt token
   *
   * @author
   * @since
   * v1.0.0
   */
  async createToken(id: number) {
    //   return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
    return await jwt.sign({ id }, serverConfig.SECRET, { expiresIn: "1d" });
    //   console.log("token", token);
  }
}
