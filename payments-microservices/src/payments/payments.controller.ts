import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentsDto } from './dtos/CreatePayments.dto';

@Controller()
export class PaymentsMicroserviceController {
  constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}
  @EventPattern('createPayment')
  createPayment(@Payload() data: CreatePaymentsDto) {
    console.log(data);
    this.natsclient.emit('createdPayment', data);
  }
}
