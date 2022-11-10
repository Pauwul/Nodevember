import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  // controllers handle incoming requests and send back responses
  controllers: [AppController], 
 // providers can be injected into controllers
  providers: [AppService],
})
export class AppModule {}
