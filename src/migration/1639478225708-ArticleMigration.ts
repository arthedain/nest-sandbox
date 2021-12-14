import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ArticleMigration1639478225708 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const fields = {
      name: 'articles',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'categoryId',
          type: 'int',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
          onUpdate: 'now()',
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    };

    await queryRunner.createTable(new Table(fields), true);

    await queryRunner.createForeignKey(
      'articles',
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'RESTRICT',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(new Table({ name: 'articles' }), true);
  }
}
