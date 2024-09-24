import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-payment-intent')
  async createPaymentIntent(@Body('amount') amount: number) {
    return this.paymentService.createPaymentIntent(amount);
  }

  @Post('confirm-payment')
  async confirmPayment(@Body('paymentIntentId') paymentIntentId: string) {
    return this.paymentService.confirmPayment(paymentIntentId);
  }
}
