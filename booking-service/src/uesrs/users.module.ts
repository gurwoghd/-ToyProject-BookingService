import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { Book, BookSchema } from 'src/schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'users',
    ),
    MongooseModule.forFeature(
      [{ name: Book.name, schema: BookSchema }],
      'books',
    ),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
