import { NestFactory } from '@nestjs/core';
import { SeedersModule } from './seeders.module';
import { SeedersService } from './seeders.service';

async function bootstrap() {
  await NestFactory.createApplicationContext(SeedersModule).then(
    (appContent) => {
      const seeder = appContent.get(SeedersService);
      seeder.seed();
    },
  );
}

bootstrap();
