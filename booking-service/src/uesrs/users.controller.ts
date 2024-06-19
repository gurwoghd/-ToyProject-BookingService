import {
  Controller,
  Post,
  Body,
  Delete,
  Get,
  Patch,
  Param,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from 'src/dto/user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // book a user
  @Post()
  async bookUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    this.userService.bookUser(createUserDto);
  }

  // delete a user(serving)
  @Delete()
  async serveUser(@Body() user: CreateUserDto): Promise<void> {
    this.userService.serveUser(user);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  async update(@Param(':id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
