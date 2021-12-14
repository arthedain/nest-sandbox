import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/categories.entity';
import { ArticlesModule } from './articles/articles.module';
import { Article } from './articles/articles.entity';
import { FilesModule } from './files/files.module';
import { resolve } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.entity';
import { ArticleMigration1639478225708 } from './migration/1639478225708-ArticleMigration';

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
    UsersModule,
    AuthModule,
    CategoriesModule,
    ArticlesModule,
    FilesModule,
    RolesModule,
  ],
})
export class AppModule {}
