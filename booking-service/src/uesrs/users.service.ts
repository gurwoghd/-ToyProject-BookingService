import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async bookUser(@Body() createUserDto: CreateUserDto) {
    this.userRepository.create({
      id: createUserDto.ID,
      priority: createUserDto.priority,
      name: createUserDto.name,
    });
  }

  async getUser(@Param() param) {
    this.userRepository.findOneBy({ id: param.id });
  }
  async serveUser(@Param() param) {
    this.userRepository.delete({ id: param.id });
  }
}
