import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './uesrs/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/users', {
      connectionName: 'users',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: '',
      password: '',
      host: '',
      port: ,
      entities: [],
      database: '',
    }), UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
