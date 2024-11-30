import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

/**
 * @implementaion
 * This is the User Service Layer of the application that services
 * all User Controller functions
 *
 * @return
 * returns client authentication data
 *
 * @author
 * @since
 * v1.0.0
 */
export class UserService {
  private userRepository: any;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  /**
   * @implementaion
   * This method fetch all routes from the database
   *
   * @return
   * users
   *
   * @author
   * @since
   * v1.0.0
   */
  async all() {
    return this.userRepository.find();
  }

  /**
   * @implementaion
   * This method fetch one routes from the database
   * using the user id
   *
   * @return
   * user
   *
   * @author
   * @since
   * v1.0.0
   */
  async one(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  /**
   * @implementaion
   * This method fetch one routes from the database
   * using the user id
   *
   * @return
   * user
   *
   * @author
   * @since
   * v1.0.0
   */
  async findById(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  /**
   * @implementaion
   * This method fetch one routes from the database
   * using the user email
   *
   * @return
   * user
   *
   * @author
   * @since
   * v1.0.0
   */
  async findByEmail(email: String) {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new Error("user does not exist");
    }
    return user;
  }

  /**
   * @implementaion
   * This method saves user to the database
   * and return the data
   *
   * @return
   * user
   *
   * @author
   * @since
   * v1.0.0
   */
  async save(user: User) {
    return await this.userRepository.save(user);
  }

  /**
   * @implementaion
   * This method removes user from the database using user id
   *
   * @return
   * user
   *
   * @author
   * @since
   * v1.0.0
   */
  async remove(id: number) {
    let userToRemove = await this.userRepository.findOneBy({ id });

    if (!userToRemove) {
      return "this user not exist";
    }

    await this.userRepository.remove(userToRemove);

    return "user has been removed";
  }
}
