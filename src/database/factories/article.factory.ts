import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { Article } from '../../entities/article';
import { MathHelper } from '../../helpers/math.helper';
// import { FilesService } from '../../files/files.service';

define(Article, (faker: typeof Faker) => {
  const article = new Article();
  article.name = faker.random.words(MathHelper.random(1, 10));
  // new FilesService();
  return article;
});
