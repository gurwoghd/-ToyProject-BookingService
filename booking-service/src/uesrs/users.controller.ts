import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from 'src/dto/user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // book a user
  @Post()
  async bookUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.bookUser(createUserDto);
  }

  // get booked users
  @Get(':id')
  async getUser(@Param('id') param) {
    return this.userService.getUser(param);
  }

  // delete a user : after serving
  @Delete(':id')
  async serveUser() {
    this.userService.serveUser();
  }
  //
}
