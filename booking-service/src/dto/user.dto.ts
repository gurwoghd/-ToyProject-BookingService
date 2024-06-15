import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  priority: string;

  @IsString()
  name: string;

  @IsInt()
  ID: number;
}
