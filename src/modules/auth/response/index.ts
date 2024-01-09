import { IsNumber, IsString } from 'class-validator';

class UserResponse {
  @IsNumber()
  ID: number;

  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class AuthUserResponse {
  user: UserResponse;

  @IsString()
  token: string;
}
