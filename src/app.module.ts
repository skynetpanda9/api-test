import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { userModule } from './user/user.module';

@Module({
  imports: [userModule],
  controllers: [AppController],
})
export class AppModule {}
