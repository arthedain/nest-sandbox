import { IFactory } from './IFactory';

export class ArticlesFactory implements IFactory {
  faker = require('faker');

  make() {
    return this.faker.random.name;
  }
}
