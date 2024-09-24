import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Stripe } from 'stripe';

@Module({
  imports: [ConfigModule],
  providers: [
    PaymentService,
    {
      provide: 'STRIPE',
      useFactory: (configService: ConfigService) => {
        return new Stripe(configService.get('STRIPE_SECRET_KEY'), {
          apiVersion: '2024-06-20',
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [PaymentService],
})
export class PaymentModule {}
