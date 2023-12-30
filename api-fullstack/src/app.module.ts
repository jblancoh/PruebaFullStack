import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { EmploymentByLocationModule } from './employment-by-location/employment-by-location.module';
import { EmploymentByLocation } from './employment-by-location/entities/employment-by-location.entity';

@Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [Product, User, EmploymentByLocation],
        synchronize: true,
        ssl: process.env.POSTGRES_SSL === 'true',
        extra: {
          ssl: 
            process.env.POSTGRES_SSL === 'true'
              ? {
                  rejectUnauthorized: false,
                }
              : null,
        },
      }),
      ProductsModule,
      UsersModule,
      AuthModule,
      EmploymentByLocationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
  })
export class AppModule {}
