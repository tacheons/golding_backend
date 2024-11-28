import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class AuthService {
  private userRepository: any;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async login(email: String, password: String) {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    return user;
  }
}
