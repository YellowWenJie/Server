/*
 * @Author: 黄文杰
 * @Date: 2022-10-04 21:03:52
 * @LastEditTime: 2022-10-04 21:17:17
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.SERVER_PORT, 10));
}
bootstrap();
