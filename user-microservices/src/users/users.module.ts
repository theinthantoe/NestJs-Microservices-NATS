import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './user.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entites/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserMicroserviceController],
  providers: [UsersService],
})
export class UsersModule {}
