import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
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

  async getUser(@Param('id') param)) {
    this.userRepository.find(param);
  }
  
  async serveUser() {

  }
}

