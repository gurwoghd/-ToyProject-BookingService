import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  priority: string;

  @IsString()
  name: string;

  @IsNumber()
  id: number;
}
