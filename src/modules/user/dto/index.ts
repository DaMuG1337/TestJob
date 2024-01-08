import { IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNumber()
  ID: number;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserDTO {
  @IsNumber()
  ID: number;

  @IsString()
  username: string;

  @IsString()
  email: string;
}
