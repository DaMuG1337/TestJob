import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configurations from '../../configurations';
import { User } from '../user/models/user.model';
import {AuthModule} from "../auth/auth.module";
import {TokenModule} from "../../token/token.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        name: configService.get('db_name'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),

        dialect: 'postgres',
        synchronize: true,
        autoLoadModels: true,
        models: [User],
      }),
    }),
    UserModule,
      AuthModule,
      TokenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
