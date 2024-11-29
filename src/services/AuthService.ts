import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

/**
 * @implementaion
 * This is the Authentication Service Layer of the application that services
 * all Authentication Controller functions
 *
 * @return
 * returns client authentication data
 *
 * @author
 * @since
 * v1.0.0
 */
export class AuthService {
  private userRepository: any;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  /**
   * @implementaion
   * This method service the user login, by fetching the required data 
   * from the database
   *
   * @return
   * returns client authentication data
   *
   * @author
   * @since
   * v1.0.0
   */
  async login(email: String, password: String) {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    return user;
  }
}
