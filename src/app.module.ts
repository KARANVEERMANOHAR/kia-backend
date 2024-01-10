import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealersModule } from './dealers/dealers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { KiaCustomersModule } from './kia-customers/kia-customers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    MongooseModule.forRoot(
      process.env.ENVIRONMENT === 'local'
        ? `${process.env.MONGO_LOCAL_DB_URL}`
        : `${process.env.MONGO_PRODUCTION_DB_URL}`,
    ),
    DealersModule,
    KiaCustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
console.log('process::', process.env.MONGO_PRODUCTION_DB_URL);
