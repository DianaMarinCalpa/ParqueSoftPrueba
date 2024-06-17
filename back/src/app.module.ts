import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/entities/user.entity';
import { Account } from './modules/account/entities/account.entity';
import { Motion } from './modules/motion/entities/motion.entity';
import { UsersModule } from './modules/users/users.module';
import { MotionModule } from './modules/motion/motion.module';
import { AccountModule } from './modules/account/account.module';
import envConfig from './config/env/env.config';
import { environments } from './config/env/enviroments';
import { getSchemmaValidation } from './config/env/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || environments.DEV,
      load: [envConfig],
      isGlobal: true,
      validationSchema: getSchemmaValidation(),
    }),
    TypeOrmModule.forRootAsync({
      inject: [envConfig.KEY],
      useFactory: (configService: ConfigType<typeof envConfig>) => ({
        type: 'postgres',
        host: configService.DB_HOST,
        port: configService.DB_PORT,
        username: configService.DB_USER,
        password: configService.DB_PASSWORD,
        database: configService.DB_NAME,
        entities: [User, Account, Motion],
        migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/migrations',
        },
        synchronize: true,
      }),
    }),

    UsersModule,
    MotionModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
