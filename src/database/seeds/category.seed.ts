import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Category } from '../../entities/category';

export class CategorySeed implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Category)().createMany(5);
  }
}
