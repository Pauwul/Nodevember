import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [ProductsModule, MongooseModule.forRoot(process.env.MONGO_URI)],
  // controllers handle incoming requests and send back responses
  controllers: [AppController],
  // providers can be injected into controllers
  providers: [AppService],
})
export class AppModule {}
