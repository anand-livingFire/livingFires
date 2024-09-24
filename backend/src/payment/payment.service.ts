import { Injectable, Inject } from '@nestjs/common';
import { Stripe } from 'stripe';

@Injectable()
export class PaymentService {
  constructor(@Inject('STRIPE') private readonly stripeClient: Stripe) {}

  async createPaymentIntent(amount: number, currency: string = 'usd') {
    return this.stripeClient.paymentIntents.create({
      amount,
      currency,
    });
  }

  async confirmPayment(paymentIntentId: string) {
    return this.stripeClient.paymentIntents.confirm(paymentIntentId);
  }
}
