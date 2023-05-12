import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { AdvertModule } from './advert/advert.module';

@Module({
  imports: [SharedModule, AdvertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
