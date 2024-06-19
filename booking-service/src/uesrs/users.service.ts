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
    const a = this.userRepository.create(createUserDto);
    return this.userRepository.save(a);
    // this.userRepository.insert(createUserDto);
  }

  async serveUser(@Body() user: CreateUserDto): Promise<void> {
    this.userRepository.delete(user);
  }

  async findAll() {
    return this.userRepository.find(); // json body 배열로 반환?
  }

  async update(@Param(':id') id: number, @Body() updateUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    const updatedUser = {
      ...user,
      ...updateUserDto,
    };

    return this.userRepository.save(updatedUser);
  }
}
