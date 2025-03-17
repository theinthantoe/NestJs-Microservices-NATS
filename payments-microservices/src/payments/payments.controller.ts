import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentsDto } from './dtos/CreatePayments.dto';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private natsclient: ClientProxy,
    private paymentsService: PaymentsService,
  ) {}
  @EventPattern('createPayment')
  createPayment(@Payload() data: CreatePaymentsDto) {
    const newPayment = this.paymentsService.createPayment(data);
    this.natsclient.emit('createdPayment', newPayment);
  }
}
