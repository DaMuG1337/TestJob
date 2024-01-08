import { IsNumber, IsString } from 'class-validator';

export class AuthUserResponse {
  @IsNumber()
  ID: number;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  token: string;
}
