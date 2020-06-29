import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { FilesModule } from './files/files.module';
import { OrdersModule } from './orders/orders.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    MyConfigModule.register(),
    TypeOrmModule.forRootAsync({
      imports: [MyConfigModule],
      useFactory: (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService]
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
    CategoriesModule,
    FilesModule,
    OrdersModule,
    MailerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
