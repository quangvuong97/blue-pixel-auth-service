import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EEnvConfig } from 'src/common/constants';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get(EEnvConfig.MONGODB_URI),
        dbName: configService.get(EEnvConfig.MONGODB_NAME),
      }),
    }),
  ],
})
export class DatabaseModule {}
