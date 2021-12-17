import { Category } from '../../entities/category';
import { define } from 'typeorm-seeding';
import * as Faker from 'faker';

define(Category, (faker: typeof Faker) => {
  const category = new Category();
  category.name = faker.random.word();
  return category;
});
