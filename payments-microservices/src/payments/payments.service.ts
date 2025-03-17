import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from '../typerorm/entites/Payment';
import { Repository } from 'typeorm';
import { CreatePaymentsDto } from './dtos/CreatePayments.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
  ) {}
  createPayment(CreatePaymentsDto: CreatePaymentsDto) {
    const newPayment = this.paymentRepository.create(CreatePaymentsDto);
    return this.paymentRepository.save(newPayment);
  }
}
