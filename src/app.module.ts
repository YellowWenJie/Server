/*
 * @Author: 黄文杰
 * @Date: 2022-10-04 21:03:52
 * @LastEditTime: 2022-10-04 21:10:43
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
