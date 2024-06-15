import { IsString } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  @IsString()
  priority: string;

  @Column()
  @IsString()
  name: string;
}
