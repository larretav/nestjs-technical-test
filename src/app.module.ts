import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { LoggerModule } from './logger/logger.module';
import { UserListModule } from './user-list/user-list.module';
import { SupportReportsModule } from './support-reports/support-reports.module';
import { ShipmentsModule } from './shipments/shipments.module';
import typeormConfig from './database/typeorm.config';



@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig]
    }),

    // TypeOrmModule.forRoot(connectionSource),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),

    CommonModule,
    ContactsModule,
    SeedModule,
    AuthModule,
    UsersModule,
    LoggerModule,
    UserListModule,
    SupportReportsModule,
    ShipmentsModule,
  ],

  controllers: [],
  providers: [],

})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('seed/create-user-admin')
      .forRoutes('contacts', 'users', 'auth', 'seed')
  }

  constructor() {
    console.log({
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    })
  }
}
