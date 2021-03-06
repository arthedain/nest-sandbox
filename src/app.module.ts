import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './entities/category';
import { ArticlesModule } from './articles/articles.module';
import { Article } from './entities/article';
import { FilesModule } from './files/files.module';
import { resolve } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RolesModule } from './roles/roles.module';
import { Role } from './entities/roles';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'storage'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      entities: [User, Category, Article, Role],
    }),
    BullModule.forRoot({
      redis: {
        host: 'redis_nest',
        port: 6379,
      },
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    ArticlesModule,
    FilesModule,
    RolesModule,
  ],
})
export class AppModule {}
