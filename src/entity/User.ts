import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  isEmail,
} from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(2, 255)
  firstname: string;

  @Column()
  @Length(2, 255)
  lastname: string;

  @Column()
  @Unique("email", ["email"])
  @Length(2, 255)
  email: string;

  @Column()
  @Length(2, 255)
  password: string;
}
