import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UserMicroserviceController {
  constructor(private userService: UsersService) {}
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
  @EventPattern('createdPayment')
  createdPayment(@Payload() data: any) {
    console.log(data, 'user');
  }
}
