import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export abstract class UserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
