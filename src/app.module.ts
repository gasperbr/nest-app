import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ItemModule } from './item/item.module';
import { GetLogger } from './middleware/middleware.logger';

@Module({
  imports: [TypeOrmModule.forRoot(), ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
  configure(consumer: MiddlewareConsumer){
    consumer.apply(GetLogger).forRoutes({ path: '/', method: RequestMethod.GET });
  }
}
