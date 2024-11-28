import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserService {
  private userRepository: any;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async all() {
    return this.userRepository.find();
  }

  async one(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  async findById(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  async findByEmail(email: String) {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  async save(user: User) {
    try {
      /**
       * check if user already exist
       */
      if (!(await this.userRepository.findOneBy({ email: user.email }))) {
        return this.userRepository.save(user);
      } else {
        return { error: "user already exist" };
      }
    } catch (error) {
      console.log(error);
      if (error.code === "ER_DUP_ENTRY") {
        return { error: "user already exist" };
      } else {
        return { error: "unable to save user" };
      }
    }
  }

  async remove(id: number) {
    let userToRemove = await this.userRepository.findOneBy({ id });

    if (!userToRemove) {
      return "this user not exist";
    }

    await this.userRepository.remove(userToRemove);

    return "user has been removed";
  }
}
