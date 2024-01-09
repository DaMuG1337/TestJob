import { IsNumber, IsString } from 'class-validator';

export class CreateBooksResponse {
  @IsNumber()
  user: number;

  @IsString()
  name: string;

  @IsString()
  booksId: number;
}
